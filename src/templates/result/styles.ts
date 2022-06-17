import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    margin: 0 auto;
    max-width: 160rem;
    grid-template-columns: 26rem 1fr 26rem;
    column-gap: ${theme.spacings.xlarge};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};
    overflow: auto;
    width: 100%;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
  `}
`;
