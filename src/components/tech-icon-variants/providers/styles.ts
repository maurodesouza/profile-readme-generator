import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    position: relative;
    grid-area: show-more;
    font-size: ${theme.font.sizes.xsmall};
    align-self: end;
    justify-self: start;
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

type WrapperProps = {
  isOpen: boolean;
};

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, isOpen }) => css`
    padding: calc(${theme.spacings.xsmall} / 2) ${theme.spacings.small};
    border-width: ${theme.border.width};
    border-style: solid;
    border-color: ${theme.colors.border};
    background: ${theme.colors.bg};
    border-radius: ${theme.border.radius};
    position: relative;
    width: 17rem;
    left: -3rem;

    transition: all 0.3s;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`;

type ButtonProps = {
  active: boolean;
};

export const Item = styled.button<ButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    text-align: left;
    padding-block: calc(${theme.spacings.xsmall} / 2);
    color: ${theme.colors[active ? 'tertiary' : 'text']};

    &:hover {
      color: ${theme.colors.primary};
    }

    &:disabled {
      color: ${theme.colors.text};
      opacity: 0.4;
      cursor: not-allowed;
    }
  `}
`;
