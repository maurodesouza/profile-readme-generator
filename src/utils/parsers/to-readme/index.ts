import { array } from '#/utils/array';
import { TFile } from '#/components/atoms/tree';
import htmlPrettify from 'html-prettify';

import { CanvasSection, CanvasStatesEnum, Settings } from '#/types';

type ParserModule = {
  parser?: {
    readme?: (props: unknown, settings: Settings) => string;
    workflow?: (props: unknown, settings: Settings) => unknown;
  };
};

export function toReadme(
  template: CanvasSection[],
  parsers: Record<string, ParserModule> | undefined,
  settings: Settings
) {
  if (!parsers) parsers = {} as Record<string, ParserModule>;

  const readme = template.reduce((readme, section) => {
    const { state, styles = {} } = section.props;

    if (state === CanvasStatesEnum.ALERT) return readme;

    const generator = parsers[section.type!];

    if (!generator?.parser?.readme) return readme;

    const html = htmlPrettify(generator.parser.readme(section.props, settings));

    return `${readme}\n${
      styles.clear ? '\n<br clear="both">\n' : ''
    }\n${html}\n###`;
  }, '');

  const workflows = template.reduce((workflows, section) => {
    if (section.props.state === CanvasStatesEnum.ALERT) return workflows;

    const generator = parsers[section.type!];

    if (!generator?.parser?.workflow) return workflows;

    const workflow = generator.parser.workflow(section.props, settings) as
      | TFile
      | TFile[]
      | null
      | undefined;

    if (!workflow) return workflows;

    const next = array.toArray(workflow);

    return [...workflows, ...next];
  }, [] as TFile[]);

  const readmeFormatted = readme.replace(/(###)/g, '\n$1');

  const tree = [
    {
      name: '.github/workflows',
      files: workflows,
    },
    {
      name: '',
      files: [
        {
          file: 'README.md',
          content: readmeFormatted.trim(),
        },
      ],
    },
  ];

  return tree;
}
