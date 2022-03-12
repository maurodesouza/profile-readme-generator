import htmlPrettify from 'html-prettify';
import { CanvasSection } from 'types';

import { sectionsGeneratorMap } from './sections';

const readmeGenerator = (template: CanvasSection[]) => {
  const readme = template.reduce((readme, section) => {
    const generator = (sectionsGeneratorMap as any)[section.type!];

    if (!generator) return readme;

    const html = htmlPrettify(generator(section.props));

    return `${readme}\n${html}\n###`;
  }, '');

  const readmeFormated = readme.replace(/(###)/g, '\n$1');

  return readmeFormated.trim();
};

export { readmeGenerator };
