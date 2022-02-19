import { getTechIconUrl } from 'utils';
import * as S from './styles';

type TechStyles = {
  size: number;
  align: 'center' | 'right' | 'left';
};

type Tech = {
  icon: string;
};

type Content = {
  techs: Record<string, Tech>;
  styles: TechStyles;
};

type TechsSectionProps = {
  content: Content;
};

const TechsSection = ({ content }: TechsSectionProps) => {
  const { techs, styles } = content;
  const { size, ...containerStyles } = styles;

  return (
    <S.Container {...containerStyles}>
      {Object.entries(techs).map(([tech, { icon }]) => (
        <img
          key={tech}
          height={size}
          width={size}
          alt={`${tech} logo`}
          src={getTechIconUrl(tech, icon)}
        />
      ))}
    </S.Container>
  );
};

export { TechsSection };
