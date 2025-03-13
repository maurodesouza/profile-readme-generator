import { theme } from 'styles';

// inferência de tipos
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { 
    NAME: string, 
    grid: { 
      container: string 
    },
    border: { 
      width: string, 
      radius: string 
    },
    font: { 
      family: string,
      weights: {
        normal: number,  
        bold: number 
      }, 
      sizes: { 
        xsmall: string, 
        small: string, 
        medium: string, 
        large: string, 
        xlarge: string 
      } 
    },
    colors: { 
      primary: string, 
      secondary: string, 
      tertiary: string, 
      border: string, 
      text: string, 
      bg: string, 
      error: string 
    },
    spacings: { 
      xsmall: string, 
      small: string, 
      medium: string, 
      large: string, 
      xlarge: string 
    } 
  }
};