import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 160rem;
    column-gap: ${theme.spacings.xlarge};
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
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
  `}
`;
