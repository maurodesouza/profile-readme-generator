import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    import('./text');
    import('./techs');
  }, []);

  return null;
};

export { Features };
