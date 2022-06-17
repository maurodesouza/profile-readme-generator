import { GuardSection } from '../guard';

import { useSettings } from 'hooks';
import { getStatsUrl, objectToQueryParams } from 'utils';

import * as S from './styles';

type Obj = Record<string, unknown>;
type Graphs = Parameters<typeof getStatsUrl>[0];

type Content = {
  graphs: Record<Graphs, Obj>;
  from: Obj;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type StatsSectionProps = {
  id: string;
  content: Content;
  styles: SectionStyles;
};

const StatsSection = ({
  id,
  content,
  styles: containerStyles,
}: StatsSectionProps) => {
  const { settings } = useSettings();

  const { graphs } = content;
  const { github } = settings.user;

  return (
    <GuardSection sectionId={id}>
      <S.Container {...containerStyles}>
        {Object.entries(graphs).map(([graph, props]) => {
          const url = getStatsUrl(graph as Graphs);

          if (!graph) return null;

          const { height = '', ...rest } = { ...props };
          const fullUrl = `${url}?${objectToQueryParams(
            rest as Obj
          )}&username=${github}`;

          return (
            <img
              height={height || 150}
              key={graph}
              src={fullUrl}
              alt={`${graph} graph`}
            />
          );
        })}
      </S.Container>
    </GuardSection>
  );
};

export { StatsSection };
