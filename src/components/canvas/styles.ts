import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    align-self: start;
    padding: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;
