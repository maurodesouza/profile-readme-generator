import { getTechIconUrl } from 'utils';

type TechStyles = {
  height: number;
};

type Tech = {
  icon: string;
};

type Content = {
  techs: Record<string, Tech>;
  styles: TechStyles;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
  spacing: number;
};

type GenerateTechsSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const generateTechsSection = ({
  content,
  styles: sectionStyles,
}: GenerateTechsSectionArgs) => {
  const { techs, styles } = content;

  const { align, spacing } = sectionStyles;
  const { height = 40 } = styles;

  const imgsHtml = Object.entries(techs)
    .reduce((html, [tech, { icon }]) => {
      const url = getTechIconUrl(tech, icon);
      const width = Number(height) + Number(spacing);

      const img = `<img src="${url}" height="${height}" width="${width}" alt="${tech} logo" />`;

      return `${html} \n ${img}`;
    }, '')
    .trim();

  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};

export { generateTechsSection };
