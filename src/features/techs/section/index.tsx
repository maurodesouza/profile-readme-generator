import { EditableIcon } from 'types';

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

export function TechsSection(props: TechsSectionProps) {
  const { content, styles: containerStyles } = props;

  const { icons, styles } = content;
  const { height } = styles;

  return (
    <div
      className="flex flex-wrap"
      style={{
        justifyContent: containerStyles.align,
        gap: containerStyles.spacing,
      }}
    >
      {Object.entries(icons).map(
        ([name, { currentProvider, providers, config }]) => {
          const provider = providers[currentProvider]!;

          const path = provider?.variants
            ? provider?.variants[
                (config[currentProvider]?.variant ?? 0) as number
              ]
            : provider.path;

          return (
            <img
              style={{ height: `${height}px` }}
              key={name}
              alt={`${name} logo`}
              src={path}
            />
          );
        }
      )}
    </div>
  );
}
