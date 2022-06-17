import htmlPrettify from 'html-prettify';
import { CanvasSection, CanvasStatesEnum, Settings } from 'types';

import { sectionsGeneratorMap } from './sections';

const readmeGenerator = (template: CanvasSection[], settings: Settings) => {
  const readme = template.reduce((readme, section) => {
    const { state, styles } = section.props;

    if (state === CanvasStatesEnum.ALERT) return readme;

    const generator = (sectionsGeneratorMap as any)[section.type!];

    if (!generator) return readme;

    const html = htmlPrettify(generator(section.props, settings));

    return `${readme}\n${
      styles.clear ? '\n<br clear="both">\n' : ''
    }\n${html}\n###`;
  }, '');

  const readmeFormated = readme.replace(/(###)/g, '\n$1');

  const folder = {
    name: '',
    files: [
      {
        file: 'README.md',
        content: readmeFormated.trim(),
      },
    ],
  };

  return folder;
};

export { readmeGenerator };
