import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    width: calc(100% + ${theme.spacings.medium});
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    padding-right: ${theme.spacings.xsmall};

    &::-webkit-scrollbar {
      width: 0.8rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.border};
    }
  `}
`;
