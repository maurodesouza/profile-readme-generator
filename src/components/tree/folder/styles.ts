import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Gap = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.medium};
  `}
`;
