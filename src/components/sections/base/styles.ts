import styled, { css, DefaultTheme } from 'styled-components';
import { Reorder } from 'framer-motion';

import { CanvasStatesEnum } from 'types';

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

    & + & {
      margin-top: 3px;
    }
  `}
`;

type WrapperProps = {
  state: CanvasStatesEnum;
};

const wrapperModifiers = {
  [CanvasStatesEnum.SELECTED]: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary};
  `,

  [CanvasStatesEnum.ALERT]: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.tertiary};
    border-style: dashed;

    &:hover {
      border-color: ${theme.colors.tertiary};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, state }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    cursor: pointer;

    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: transparent;
    border-style: solid;

    * {
      cursor: pointer;
    }

    &:hover {
      border-color: ${theme.colors.primary};
    }

    ${state !== CanvasStatesEnum.DEFAULT && wrapperModifiers[state](theme)}
  `}
`;
