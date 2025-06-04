import { JSX } from 'react';

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type Content = {
  text: string;
  as: keyof JSX.IntrinsicElements;
};

type TextSectionProps = {
  content: Content;
  styles: SectionStyles;
};

export function TextSection(props: TextSectionProps) {
  const { content, styles } = props;

  const { text, as: Text } = content;

  return (
    <div className="flex text-section">
      <Text
        className="w-full whitespace-pre-line"
        style={{ textAlign: styles.align }}
      >
        {text.trim()}
      </Text>
    </div>
  );
}
