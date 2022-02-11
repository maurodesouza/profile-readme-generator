import styled, { css } from 'styled-components';

export const Field = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`;
