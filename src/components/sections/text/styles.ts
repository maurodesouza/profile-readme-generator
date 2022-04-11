import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  align?: 'left' | 'center' | 'right';
};

const textModifiers = {
  borderbottom: (theme: DefaultTheme) => css`
    border-bottom-width: ${theme.border.width};
    border-bottom-color: ${theme.colors.border};
    border-bottom-style: solid;
    padding-bottom: ${theme.spacings.xsmall};
  `,

  h1: () => css`
    font-size: 3.2rem;
  `,

  h2: () => css`
    font-size: 2.4rem;
  `,

  h3: () => css`
    font-size: 2rem;
  `,

  h4: () => css`
    font-size: 1.6rem;
  `,

  h5: () => css`
    font-size: 1.4rem;
  `,

  h6: () => css`
    font-size: 1.36rem;
  `,

  p: () => css`
    font-size: 1.6rem;
  `,
};

export const Text = styled.p<TextProps>`
  ${({ theme, as = 'h1', align = 'center' }) => css`
    width: 100%;
    text-align: ${align};

    ${textModifiers[as]};

    ${['h1', 'h2'].includes(as) && textModifiers.borderbottom(theme)}
  `}
`;
