import styled, { css } from 'styled-components';

export const Container = styled.div``;

type ActionProps = {
  variant?: string;
};

export const Action = styled.div<ActionProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors[variant === 'danger' ? 'error' : 'primary']};
    }

    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const WrapperIcon = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.large};
  `}
`;
