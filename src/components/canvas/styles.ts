import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;

    overflow-y: scroll;
    padding-right: ${theme.spacings.small};

    &::-webkit-scrollbar {
      width: 0.8rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.border};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding-block: ${theme.spacings.medium};
    gap: ${theme.spacings.xsmall};

    background: ${theme.colors.bg};
    color: ${theme.colors.text};

    top: ${theme.spacings.medium};
    left: 0;
    transform: translateX(-50%);
    transition: 0.3s;

    border-color: ${theme.colors.border};
    border-width: ${theme.border.width};
    border-style: solid;
    border-radius: 10rem;

    &:hover {
      color: ${theme.colors.error};
    }
  `}
`;

type ButtonsProps = {
  variant?: 'warn' | 'success';
};

const buttonModifiers = {
  warn: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.error};
    }
  `,

  success: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.secondary};
    }
  `,
};

export const Button = styled.button<ButtonsProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    display: grid;
    place-items: center;
    padding-block: 2px;

    * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors.primary};
    }

    ${!!variant && buttonModifiers[variant](theme)}
  `}
`;
