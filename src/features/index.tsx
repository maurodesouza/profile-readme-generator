import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    import('./text');
    import('./techs');
    import('./stats');
    import('./socials');
    import('./snake');
  }, []);

  return null;
};

export { Features };
