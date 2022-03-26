import styled, { css, DefaultTheme } from 'styled-components';
import { SimpleInput } from '../simple-input';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

type InputProps = {
  isSelected: boolean;
};

export const Input = styled(SimpleInput)<InputProps>`
  ${({ theme, isSelected }) => css`
    ${isSelected &&
    css`
      & input::placeholder {
        color: ${theme.colors.text};
      }
    `}
  `}
`;

type DropdownProps = {
  open: boolean;
  openToUp: boolean;
};

const dropdownModifiers = {
  open: () => css`
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  `,

  toUp: (theme: DefaultTheme) => css`
    top: unset;
    transform: translateY(-10px);
    bottom: calc(100% + ${theme.spacings.xsmall});
  `,
};

export const Dropdown = styled.div<DropdownProps>`
  ${({ theme, open, openToUp }) => css`
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + ${theme.spacings.xsmall});
    width: 100%;
    background: ${theme.colors.bg};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: 20rem;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.2s;
    pointer-events: none;

    ${openToUp && dropdownModifiers.toUp(theme)};
    ${open && dropdownModifiers.open};

    &::-webkit-scrollbar {
      width: 0.8rem;
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
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

export const Option = styled.button`
  ${({ theme }) => css`
    flex-shrink: 0;
    width: 100%;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    cursor: pointer;
    background: ${theme.colors.bg};
    border: none;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    &:hover {
      filter: brightness(150%);
    }
  `}
`;

type WrapperProps = {
  show: boolean;
};

const wrapperModifiers = {
  show: () => css`
    opacity: 1;
    transform: translateX(0);
    pointer-events: all;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ show }) => css`
    position: absolute;
    width: 3.8rem;
    height: 3.8rem;
    bottom: 0;
    right: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: 0.2s;
    opacity: 0;
    transform: translateX(5px);
    pointer-events: none;

    ${show && wrapperModifiers.show};

    * {
      cursor: pointer;
    }
  `}
`;
