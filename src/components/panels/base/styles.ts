import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;
