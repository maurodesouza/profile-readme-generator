import { getSocialImgUrl } from 'utils';

type SocialStyles = {
  type: 'icon' | 'badge';
  style: string;
  height?: number;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
  spacing: number;
};

type SocialIcon = {
  icon: string;
  link: string;
};

type SocialBadge = Record<string, string>;

type Social = SocialIcon | SocialBadge;

type Content = {
  socials: Record<string, Social>;
  styles: SocialStyles;
};

type SocialsSectionParserArgs = {
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

const socialsSectionParser = ({
  content,
  styles: sectionStyles,
}: SocialsSectionParserArgs) => {
  const { socials, styles } = content;

  const { align, spacing } = sectionStyles;
  const { height = 40, type, style } = styles;

  const imgsHtml = Object.entries(socials)
    .reduce((html, [social, { link, ...rest }]) => {
      const props = { ...rest, style };
      const url = getSocialImgUrl(type, social, props);

      const widthValue = Number(height) + Number(spacing);
      const widthAttr = type === 'icon' ? ` width="${widthValue}"` : '';

      const img = `<img src="${url}"${widthAttr} height="${height}" alt="${social} logo" />`;
      const finalHtml = link ? wrapperHtmlInLink(link, img) : img;

      return `${html}\n${finalHtml}`;
    }, '')
    .trim();

  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};

export { socialsSectionParser };
