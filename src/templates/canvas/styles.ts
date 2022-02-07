import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 30rem 1fr 30rem;
    column-gap: ${theme.spacings.xlarge};
  `}
`;
