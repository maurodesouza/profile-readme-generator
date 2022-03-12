type Content = {
  url: string;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  height: number;
  float: 'none' | 'right' | 'left';
};

type GenerateImageSectionArgs = {
  content: Content;
  styles: Styles;
};

const generateImageSection = ({
  content,
  styles,
}: GenerateImageSectionArgs) => {
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

export { generateImageSection };
