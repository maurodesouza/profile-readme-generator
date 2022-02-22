import { CanvasSection } from 'types';

import { sectionsGeneratorMap } from './sections';

const readmeGenerator = (template: CanvasSection[]) => {
  const finalReadme = template.reduce((readme, section) => {
    const generator = (sectionsGeneratorMap as any)[section.type!];

    if (!generator) return readme;

    const html = generator(section.props);

    return `${readme} \n ${html}`;
  }, '');

  console.log('final readme', finalReadme);
};

export { readmeGenerator };
