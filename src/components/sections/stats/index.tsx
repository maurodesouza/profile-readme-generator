import { getStatsUrl, objectToQueryParams } from 'utils';

import * as S from './styles';

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};
type StatsSectionProps = {
  content: any;
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
        const url = getStatsUrl(graph);

        if (!graph) return null;

        const { height = '', ...rest } = { ...from, ...props };
        const fullUrl = `${url}?${objectToQueryParams(rest)}`;

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
