import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    import('./text');
    import('./techs');
    import('./stats');
  }, []);

  return null;
};

export { Features };
