import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    color: ${theme.colors.border};
    border-style: solid;
    transition: 0.3s;

    &:hover,
    &:hover * {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
    transition: 0.3s;
    user-select: none;
    cursor: pointer;

    * {
      cursor: pointer;
    }
  `}
`;

type ImageProps = {
  imgWidth: string;
  imgHeight: string;
};

export const Image = styled.img<ImageProps>`
  ${({ imgWidth, imgHeight }) => css`
    width: ${imgWidth};
    height: ${imgHeight};
  `}
`;
