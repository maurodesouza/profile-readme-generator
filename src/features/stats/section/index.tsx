import { GuardSection } from 'components/sections/guard';

import { useSettings } from 'hooks';
import { getStatsUrl, objectToQueryParams } from 'utils';

type Obj = Record<string, unknown>;
type Graphs = Parameters<typeof getStatsUrl>[0];

type Content = {
  graphs: {
    [key in Graphs]: Obj;
  };
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
  direction: 'row' | 'column';
};

type StatsSectionProps = {
  id: string;
  content: Content;
  styles: SectionStyles;
};

export function StatsSection(props: StatsSectionProps) {
  const { id, content, styles: containerStyles } = props;
  const { settings } = useSettings();

  const { graphs } = content;
  const { github } = settings.user;

  return (
    <GuardSection sectionId={id}>
      <div
        className="flex flex-wrap gap-xs"
        style={{
          justifyContent: containerStyles.align,
          flexDirection: containerStyles.direction,
        }}
      >
        {(Object.entries(graphs) as [Graphs, Obj][]).map(([graph, props]) => {
          const url = getStatsUrl(graph as Graphs, github!);

          const { height = '', show = false, ...rest } = { ...props };
          if (!graph || !show) return null;

          const fullUrl = `${url}&${objectToQueryParams(rest as Obj)}`;

          return (
            <img
              height={Number(height || 150)}
              key={graph}
              src={fullUrl}
              alt={`${graph} graph`}
              className="max-w-full"
            />
          );
        })}
      </div>
    </GuardSection>
  );
}
