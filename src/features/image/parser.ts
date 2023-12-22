type Content = {
  url: string;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  height: number;
  float: 'none' | 'right' | 'left';
};

type ImageSectionParserArgs = {
  content: Content;
  styles: Styles;
};

const imageSectionParser = ({ content, styles }: ImageSectionParserArgs) => {
  const { url } = content;
  const { height, align, float = 'none' } = styles;

  const hasFloat = float !== 'none';

  const floatStyle = `align="${float}" `;

  return `
    ${!hasFloat ? `<div align="${align}">` : ''}
      <img ${hasFloat ? floatStyle : ''}height="${height}" src="${url}" />
    ${!hasFloat ? '</div>' : ''}
  `;
};

export { imageSectionParser };
