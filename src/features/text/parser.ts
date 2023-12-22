type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type Content = {
  text: string;
  as: string;
};

type TextSectionParserArgs = {
  content: Content;
  styles: SectionStyles;
};

const textSectionParser = ({ content, styles }: TextSectionParserArgs) => {
  const { text, as: tag } = content;
  const { align } = styles;

  const formattedText = text.trim().replace(/\n/g, '<br>');

  return `<${tag} align="${align}">${formattedText}</${tag}>`;
};

export { textSectionParser };
