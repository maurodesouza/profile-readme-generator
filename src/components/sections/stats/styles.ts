import styled, { css } from 'styled-components';

type ContainerProps = {
  align: 'left' | 'center' | 'right';
  direction: 'row' | 'column';
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'center', direction = 'row' }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};
    justify-content: ${align};
    gap: ${theme.spacings.xsmall};

    img {
      max-width: 100%;
    }
  `}
`;
