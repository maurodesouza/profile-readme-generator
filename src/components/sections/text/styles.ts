import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

type TextProps = {
  as?: string;
  align?: 'left' | 'center' | 'right';
};

const textModifiers = {
  borderbottom: (theme: DefaultTheme) => css`
    border-bottom-width: ${theme.border.width};
    border-bottom-color: ${theme.colors.border};
    border-bottom-style: solid;
    padding-bottom: ${theme.spacings.xsmall};
  `,
};

export const Text = styled.p<TextProps>`
  ${({ theme, as = 'h1', align = 'center' }) => css`
    width: 100%;
    text-align: ${align};

    ${['h1', 'h2'].includes(as) && textModifiers.borderbottom(theme)}
  `}
`;
