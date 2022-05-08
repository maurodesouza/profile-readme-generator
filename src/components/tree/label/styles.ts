import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  `}
`;
