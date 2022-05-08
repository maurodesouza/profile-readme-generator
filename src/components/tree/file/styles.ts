import styled, { css } from 'styled-components';
import { Label } from '../label';

export const Container = styled(Label)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    transition: color 0.3s;
    cursor: pointer;

    * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
