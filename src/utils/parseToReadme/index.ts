import htmlPrettify from 'html-prettify';
import { CanvasSection, CanvasStatesEnum, Settings } from 'types';

const parseToReadme = (
  template: CanvasSection[],
  parsers,
  settings: Settings
) => {
  const readme = template.reduce((readme, section) => {
    const { state, styles } = section.props;

    if (state === CanvasStatesEnum.ALERT) return readme;

    const generator = (parsers as any)[section.type!];

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

    const workflow = generator.parser.workflow();

    return [...workflows, workflow];
  }, []);

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
};

export { parseToReadme };
