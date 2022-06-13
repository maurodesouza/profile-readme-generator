import { generateMedia } from 'styled-media-query';

const media = generateMedia({
  desktop: '1440px',
  laptop: '1170px',
  tablet: '768px',
  mobile: '450px',
});

export * from 'styled-media-query';
export { media };
