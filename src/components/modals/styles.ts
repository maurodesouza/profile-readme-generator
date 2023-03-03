import styled, { css } from 'styled-components';

type ContainerProps = {
  open: boolean;
};

const containerModifiers = {
  open: () => css`
    pointer-events: all;

    ${Overlay} {
      opacity: 1;
    }

    ${Content} {
      opacity: 1;
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

    ${open && containerModifiers.open}
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 40;
  opacity: 0;
  transition: 0.3s;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;

  z-index: 50;
  opacity: 0;
  transition: 0.3s;
`;
