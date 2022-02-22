import { getSocialImgUrl } from 'utils';

type SocialStyles = {
  type: 'icon' | 'badge';
  style: string;
  height?: number;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type SocialIcon = {
  icon: string;
  link: string;
};

type SocialBagde = Record<string, string>;

type Social = SocialIcon | SocialBagde;

type Content = {
  socials: Record<string, Social>;
  styles: SocialStyles;
};

type GenerateSocialsSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const wrapperHtmlInLink = (link = '', html = '') => {
  return `
    <a href="${link}" target="_blank">
      ${html}
    </a>
  `;
};

const generateSocialsSection = ({
  content,
  styles: sectionStyles,
}: GenerateSocialsSectionArgs) => {
  const { socials, styles } = content;

  const { align } = sectionStyles;
  const { height = 40, type, style } = styles;

  const imgsHtml = Object.entries(socials)
    .reduce((html, [social, { link, ...rest }]) => {
      const props = { ...rest, style };
      const url = getSocialImgUrl(type, social, props);

      const img = `<img src="${url}" height="${height}" alt="${social} logo" />`;
      const finalHtml = !!link ? wrapperHtmlInLink(link, img) : img;

      return `${html}\n${finalHtml}`;
    }, '')
    .trim();

  return `
    <div align="${align}"
      ${imgsHtml}
    </div>
  `.trim();
};

export { generateSocialsSection };
