import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const views: Record<string, ComponentType> = {
  languages: dynamic(() =>
    import('./languages').then(
      mod => mod.Languages,
      () => () => null
    )
  ),

  stats: dynamic(() =>
    import('./stats').then(
      mod => mod.Stats,
      () => () => null
    )
  ),

  streak: dynamic(() =>
    import('./streak').then(
      mod => mod.Streak,
      () => () => null
    )
  ),

  trophy: dynamic(() =>
    import('./trophy').then(
      mod => mod.Trophy,
      () => () => null
    )
  ),

  'activity-graph': dynamic(() =>
    import('./activity-graph').then(
      mod => mod.ActivityGraph,
      () => () => null
    )
  ),
};

export { views };
