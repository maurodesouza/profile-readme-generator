import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0px auto;
  `}
`;
