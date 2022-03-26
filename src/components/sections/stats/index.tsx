import { useEffect } from 'react';
import { AlertBox } from 'components';
import { useSettings } from 'hooks';

import { events } from '@events/base';
import { getStatsUrl, objectToQueryParams } from 'utils';

import { CanvasStatesEnum } from 'types';
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

  useEffect(() => {
    const state = github ? CanvasStatesEnum.DEFAULT : CanvasStatesEnum.ALERT;

    setTimeout(() => {
      events.canvas.edit({
        id,
        path: 'state',
        value: state,
      });
    });
  }, [github]);

  return github ? (
    <S.Container {...containerStyles}>
      {Object.entries(graphs).map(([graph, props]) => {
        const url = getStatsUrl(graph as Graphs);

        if (!graph) return null;

        const { height = '', ...rest } = { ...props };
        const fullUrl = `${url}?${objectToQueryParams(
          rest as Obj
        )}username=${github}`;

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
  ) : (
    <AlertBox />
  );
};

export { StatsSection };
