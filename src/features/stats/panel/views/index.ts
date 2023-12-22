import dynamic from 'next/dynamic';

const views = {
  layout: dynamic(() =>
    import('./layout').then(
      mod => mod.Layout,
      () => () => null
    )
  ),

  config: dynamic(() =>
    import('./config').then(
      mod => mod.Config,
      () => () => null
    )
  ),
};

export { views };
