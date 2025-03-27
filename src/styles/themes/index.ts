import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';
import { lightTheme } from './light';

const themes: ThemeObject = { 
    dark: defaultTheme,
    light: lightTheme
}

type ThemeObject = {
    [key: string]: DefaultTheme;
    dark: DefaultTheme,
    light: DefaultTheme
}

export { themes }