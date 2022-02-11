import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    margin-top: ${theme.spacings.large};
  `}
`;

export const Fields = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
  `}
`;

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & + & {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;
