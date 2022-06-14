import styled, { css } from 'styled-components';

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

export const ClearButton = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 6rem;
    position: absolute;
    display: grid;
    place-items: center;
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

    * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors.error};
    }
  `}
`;
