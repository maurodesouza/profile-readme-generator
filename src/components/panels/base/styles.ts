import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Sticky = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xlarge};
    position: sticky;
    top: 24px;
    width: 100%;
    height: calc(100vh - 48px);
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;
