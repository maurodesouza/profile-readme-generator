import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid: 'title close' / 1fr 3rem;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Title = styled.h3`
  grid-area: title;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  grid-area: close;
  cursor: pointer;

  * {
    cursor: pointer;
  }
`;

export const Content = styled.div``;
