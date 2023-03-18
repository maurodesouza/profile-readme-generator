import styled, { css } from 'styled-components';

type ContainerProps = {
  align: 'left' | 'center' | 'right';
  direction: 'row' | 'column';
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'center', direction = 'row' }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    flex-direction: ${direction};
    gap: ${theme.spacings.xsmall};

    img {
      max-width: 100%;
    }
  `}
`;
