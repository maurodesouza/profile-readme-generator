import { getActivitiesUrl } from 'utils';
import { activitiesSectionParser } from 'features/activities//parser';
import parse from 'html-react-parser';

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

  const mainContent = activitiesSectionParser({ content, styles });

  return (
    <div className="flex gap-sm" style={{ justifyContent: styles.align }}>
      {parse(mainContent)}
    </div>
  );
}
