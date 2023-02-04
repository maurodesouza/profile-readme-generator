import styled, { css } from 'styled-components';
import { media } from 'styles';
import { PanelSide } from 'types';

type ContainerProps = {
  close: boolean;
};

const containerModifiers = {
  close: () => css`
    ${media.lessThan('laptop')`

      ${Wrapper} {
        border: none;
        box-shadow: none;
        z-index: -10;
      }

      ${Box} {
        opacity: 0;
        overflow: hidden;
      }
    `}
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ close }) => css`
    width: 0px;
    max-width: 0px;
    height: 100%;
    position: relative;

    ${media.greaterThan('laptop')`
      width: 100%;
      max-width: 30rem;
    `}

    ${close && containerModifiers.close}
  `}
`;

type WrapperProps = {
  side: PanelSide;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, side }) => css`
    position: absolute;
    top: 0;
    ${side}: 0;
    width: 30rem;
    height: 100%;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    z-index: 10;
    box-shadow: ${side === 'left' ? 5 : -5}px 0 20px 5px ${theme.colors.bg};

    ${media.greaterThan('laptop')`
      box-shadow: none;
    `}
  `}
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
`;

type ToggleProps = {
  side: PanelSide;
  close: boolean;
};

const alterSideMap = {
  left: 'right',
  right: 'left',
};

const toggleModifiers = {
  close: (opposite: PanelSide) => css`
    ${opposite}: -5px;
    transform: rotate(180deg);
    padding-${opposite}: 0px;
    border-${opposite}: 0px;
    border-top-${opposite}-radius: 0px;
    border-bottom-${opposite}-radius: 0px;
  `,
};

export const Toggle = styled.button<ToggleProps>`
  ${({ theme, side, close }) => {
    const opposite = alterSideMap[side] as PanelSide;

    return css`
      position: absolute;
      display: grid;
      place-items: center;
      top: ${theme.spacings.medium};
      ${opposite}: -30rem;
      background: ${theme.colors.bg};
      border-radius: ${theme.border.radius};
      border-width: ${theme.border.width};
      border-color: ${theme.colors.border};
      border-style: solid;
      padding: calc(${theme.spacings.xsmall} / 2);
      transform: translateX(${side === 'left' ? '70%' : '-70%'});
      z-index: 20;

      ${close && toggleModifiers.close(opposite)}

      ${media.greaterThan('laptop')`
        display: none;
      `}
    `;
  }}
`;
