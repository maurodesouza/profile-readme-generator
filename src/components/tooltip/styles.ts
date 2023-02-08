import styled, { css, DefaultTheme } from 'styled-components';
import { TooltipVariants } from 'types';

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
  `}
`;
