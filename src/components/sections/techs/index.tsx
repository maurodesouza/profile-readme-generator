import { getTechIconUrl } from 'utils';
import * as S from './styles';

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

type TechsSectionProps = {
  content: Content;
  styles: SectionStyles;
};

const TechsSection = ({
  content,
  styles: containerStyles,
}: TechsSectionProps) => {
  const { techs, styles } = content;
  const { height } = styles;

  return (
    <S.Container {...containerStyles}>
      {Object.entries(techs).map(([tech, { icon }]) => (
        <img
          key={tech}
          height={height}
          alt={`${tech} logo`}
          src={getTechIconUrl(tech, icon)}
        />
      ))}
    </S.Container>
  );
};

export { TechsSection };
