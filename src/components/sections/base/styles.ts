import { Reorder } from 'framer-motion';
import styled, { css } from 'styled-components';

type ContainerProps = {
  isSelected: boolean;
};

export const Container = styled(Reorder.Item)<ContainerProps>`
  ${({ theme, isSelected }) => css`
    padding: ${theme.spacings.small};
    cursor: pointer;

    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${isSelected ? theme.colors.primary : 'transparent'};
    border-style: solid;

    * {
      cursor: pointer;
    }

    &:hover {
      border-color: ${theme.colors.primary};
    }
  `}
`;
