import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: auto;
`;

export const Sticky = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.spacings.xlarge};
    width: 100%;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;
