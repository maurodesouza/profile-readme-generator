import styled, { css } from 'styled-components';

type ContainerProps = {
  align: 'left' | 'center' | 'right';
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'center' }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    gap: ${theme.spacings.xsmall};

    img {
      max-width: 100%;
    }
  `}
`;
