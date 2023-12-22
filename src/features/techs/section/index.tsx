import { EditableIcon } from 'types';
import * as S from './styles';

type TechStyles = {
  height: number;
};

type Content = {
  icons: Record<string, EditableIcon>;
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
  const { icons, styles } = content;
  const { height } = styles;

  return (
    <S.Container {...containerStyles}>
      {Object.entries(icons).map(
        ([name, { currentProvider, providers, config }]) => {
          const provider = providers[currentProvider]!;

          const path = provider?.variants
            ? provider?.variants[
                (config[currentProvider]?.variant ?? 0) as number
              ]
            : provider.path;

          return (
            <img key={name} height={height} alt={`${name} logo`} src={path} />
          );
        }
      )}
    </S.Container>
  );
};

export { TechsSection };
