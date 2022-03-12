import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    margin: 0 auto;
    max-width: 118.5rem;
    grid-template-columns: 20rem 1fr 20rem;
    column-gap: ${theme.spacings.xlarge};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};
  `}
`;
