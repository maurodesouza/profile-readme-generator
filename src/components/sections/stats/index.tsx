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
  content: Content;
  styles: SectionStyles;
};

const StatsSection = ({
  content,
  styles: containerStyles,
}: StatsSectionProps) => {
  const { graphs, from } = content;

  return (
    <S.Container {...containerStyles}>
      {Object.entries(graphs).map(([graph, props]) => {
        const url = getStatsUrl(graph as Graphs);

        if (!graph) return null;

        const { height = '', ...rest } = { ...from, ...props };
        const fullUrl = `${url}?${objectToQueryParams(rest as Obj)}`;

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
  );
};

export { StatsSection };
