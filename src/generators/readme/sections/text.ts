type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type Content = {
  text: string;
  tag: string;
};

type GenerateTextSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const generateTextSection = ({ content, styles }: GenerateTextSectionArgs) => {
  const { text, tag } = content;
  const { align } = styles;

  return `<${tag} align="${align}">${text}</${tag}>`;
};

export { generateTextSection };
