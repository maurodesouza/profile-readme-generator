import styled, { css } from 'styled-components';

type ContainerProps = {
  open: boolean;
};

const containerModifiers = {
  open: () => css`
    pointer-events: all;
    opacity: 1;

    ${Overlay} {
      pointer-events: all;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ open }) => css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s;

    ${open && containerModifiers.open}
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 48rem;
`;
