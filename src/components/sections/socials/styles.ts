import styled, { css } from 'styled-components';

type ContainerProps = {
  align: 'left' | 'center' | 'right';
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'center' }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    gap: ${theme.spacings.small};
  `}
`;

export const A = styled.a``;
