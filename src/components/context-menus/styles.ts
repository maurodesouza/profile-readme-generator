import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ContainerProps = {
  x: number;
  y: number;
};

export const Container = styled(motion.div)<ContainerProps>`
  ${({ x, y }) => css`
    position: absolute;
    top: ${y}px;
    left: ${x}px;
  `}
`;
