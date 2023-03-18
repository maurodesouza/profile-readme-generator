import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { TooltipVariants } from 'types';

type ContainerModifiers = {
  [key in TooltipVariants]?: (
    theme: DefaultTheme
  ) => FlattenSimpleInterpolation;
};

type ContainerProps = {
  open: boolean;
  variant: `${TooltipVariants}`;
  x: number;
  y: number;
};

const backgroundsMap: Record<TooltipVariants, keyof DefaultTheme['colors']> = {
  [TooltipVariants.DANGER]: 'error',
  [TooltipVariants.SUCCESS]: 'secondary',
  [TooltipVariants.INFO]: 'primary',
  [TooltipVariants.DEFAULT]: 'bg',
};

const containerModifiers: ContainerModifiers = {
  [TooltipVariants.DEFAULT]: (theme: DefaultTheme) => css`
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `,
};

export const Container = styled.span<ContainerProps>`
  ${({ theme, variant, open, x, y }) => css`
    color: #fff;
    background: ${theme.colors[backgroundsMap[variant]]};
    font-size: ${theme.font.sizes.xsmall};

    position: absolute;
    top: ${y}px;
    left: ${x}px;
    padding: calc(${theme.spacings.xsmall} / 2) ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    transition: opacity 0.3s;

    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'all' : 'none'};
    z-index: 10;

    ${containerModifiers[variant] && containerModifiers[variant]!(theme)}
  `}
`;
