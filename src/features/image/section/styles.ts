import styled, { css } from 'styled-components';

type ContainerProps = {
  align?: 'left' | 'center' | 'right';
};

export const Container = styled.div<ContainerProps>`
  ${({ align = 'center' }) => css`
    display: flex;
    justify-content: ${align};
  `}
`;
