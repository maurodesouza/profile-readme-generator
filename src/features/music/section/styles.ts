import styled, { css } from 'styled-components';

type ContainerProps = {
  align?: 'left' | 'center' | 'right';
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'center' }) => css`
    display: flex;
    justify-content: ${align};
    gap: ${theme.spacings.small};
  `}

  img {
    max-width: 100%;
  }
`;
