import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: calc(${theme.spacings.xlarge} * 2);
    row-gap: ${theme.spacings.xsmall};

    ${media.greaterThan('desktop')`
      column-gap: ${theme.spacings.medium};
    `}
  `}
`;

export const Nav = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
