import dynamic from 'next/dynamic';

const views = {
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
};

export { views };
