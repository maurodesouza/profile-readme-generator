import styled, { css } from 'styled-components';

type ContainerProps = {
  spacing: number;
  align: 'left' | 'center' | 'right';
};

export const Container = styled.div<ContainerProps>`
  ${({ align = 'center', spacing }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    gap: ${spacing}px;
  `}
`;
