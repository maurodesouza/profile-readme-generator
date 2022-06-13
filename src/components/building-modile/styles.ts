import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Desktop = styled.div``;

export const Mobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Container = styled.div`
  ${Desktop} {
    display: none;
  }

  ${media.greaterThan('desktop')`

    ${Desktop} {
      display: initial;
    }

    ${Mobile} {
      display: none;
    }
  `}
`;

export const Text = styled.p`
  width: 100%;
  max-width: 32rem;
  text-align: center;
  white-space: pre-line;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 35rem;
  border-radius: 6px;
`;
