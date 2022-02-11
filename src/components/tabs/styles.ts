import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Tabs = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    border-bottom-width: ${theme.border.width};
    border-bottom-color: ${theme.colors.border};
    border-bottom-style: solid;
  `}
`;

type TabProps = {
  isActive: boolean;
};

export const Tab = styled.div<TabProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: ${isActive ? theme.colors.primary : theme.colors.text};
    padding: 0 ${theme.spacings.small};

    * {
      cursor: pointer;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Label = styled.span`
  text-align: center;
  word-wrap: nowrap;
  transition: 0.3s;
`;

export const Underline = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 4px;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
  `}
`;
