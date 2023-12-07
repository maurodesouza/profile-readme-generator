import styled, { css } from 'styled-components';

type ContainerProps = {
  align: 'left' | 'center' | 'right';
  spacing: number;
};

export const Container = styled.div<ContainerProps>`
  ${({ align = 'center', spacing }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    gap: ${spacing}px;
  `}
`;

export const A = styled.a``;
