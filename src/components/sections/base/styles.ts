import styled, { css, DefaultTheme } from 'styled-components';
import { Reorder } from 'framer-motion';

import { CanvasStatesEnum } from 'types';

type ContainerProps = {
  float: 'none' | 'left' | 'right';
  clear: boolean;
};

const marginMap = {
  left: 'right',
  right: 'left',
};

const containerModifiers = {
  float: (direction: 'left' | 'right') => css`
    margin-${marginMap[direction]}: 4px;
    float: ${direction};
  `,
};

export const Container = styled(Reorder.Item)<ContainerProps>`
  ${({ theme, float, clear }) => css`
    clear: ${clear ? 'both' : 'none'};

    ${float !== 'none' && containerModifiers.float(float)};

    & + & {
      margin-top: 6px;
    }

    &[data-hasfloat='true'] + & {
      padding-top: ${theme.spacings.xlarge};
      margin-top: 0;
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

  [CanvasStatesEnum.PREVIEW]: () => css`
    border-color: transparent;
    cursor: default;

    * {
      cursor: default;
    }

    &:hover {
      border-color: transparent;
    }
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
