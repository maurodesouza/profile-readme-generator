import { EditableIcon } from 'types';

type TechStyles = {
  height: number;
};

type Content = {
  icons: Record<string, EditableIcon>;
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
  const { icons, styles } = content;

  const { align, spacing } = sectionStyles;
  const { height = 40 } = styles;

  const imgsHtml = Object.entries(icons)
    .reduce(
      (html, [icon, { providers, currentProvider, config }], index, arr) => {
        const isLast = index === arr.length - 1;
        const provider = providers[currentProvider]!;

        const providerVariants = provider.variants || [];
        const hasVariants = !!providerVariants.length;

        const logo = hasVariants
          ? providerVariants[(config[currentProvider]?.variant ?? 0) as number]
          : provider!.path;

        const space = `<img width="${spacing}"/>`;
        const img = `<img src="${logo}" height="${height}" alt="${icon} logo" />`;

        return `${html} \n ${img}` + (!isLast ? ` \n ${space}` : '');
      },
      ''
    )
    .trim();

  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};

export { generateTechsSection };
