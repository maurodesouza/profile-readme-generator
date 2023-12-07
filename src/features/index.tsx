import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    import('./text');
    import('./techs');
    import('./stats');
    import('./socials');
  }, []);

  return null;
};

export { Features };
