import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.xlarge};
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};
  `}
`;
