import { getActivitiesUrl } from 'utils';

type Content = {
  type: Parameters<typeof getActivitiesUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ActivitiesSectionProps = {
  id: string;
  content: Content;
  styles: Styles;
};

export function ActivitiesSection(props: ActivitiesSectionProps) {
  const { content, styles } = props;
  const { type, ...rest } = content;

  const url = getActivitiesUrl(type, rest);

  return (
    <div className="flex gap-sm" style={{ justifyContent: styles.align }}>
      <img
        src={url}
        alt={`Layout with last ${type} posts`}
        className="max-w-full"
      />
    </div>
  );
}
