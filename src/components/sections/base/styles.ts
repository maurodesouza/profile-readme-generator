import styled, { css, DefaultTheme } from 'styled-components';
import { Reorder } from 'framer-motion';

type ContainerProps = {
  float: 'none' | 'left' | 'right';
};

const marginMap = {
  left: 'right',
  right: 'left',
};

const containerModifiers = {
  float: (direction: 'left' | 'right', theme: DefaultTheme) => css`
    margin-${marginMap[direction]}: ${theme.spacings.small};
    float: ${direction};
  `,
};

export const Container = styled(Reorder.Item)<ContainerProps>`
  ${({ theme, float }) => css`
    ${float !== 'none' && containerModifiers.float(float, theme)};
  `}
`;

type WrapperProps = {
  selected: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, selected }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    cursor: pointer;

    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${selected ? theme.colors.primary : 'transparent'};
    border-style: solid;

    * {
      cursor: pointer;
    }

    &:hover {
      border-color: ${theme.colors.primary};
    }
  `}
`;
