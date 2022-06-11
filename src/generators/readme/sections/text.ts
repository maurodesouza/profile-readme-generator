type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type Content = {
  text: string;
  as: string;
};

type GenerateTextSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const generateTextSection = ({ content, styles }: GenerateTextSectionArgs) => {
  const { text, as: tag } = content;
  const { align } = styles;

  const formatedText = text.trim().replace(/\n/g, '<br>');

  return `<${tag} align="${align}">${formatedText}</${tag}>`;
};

export { generateTextSection };
