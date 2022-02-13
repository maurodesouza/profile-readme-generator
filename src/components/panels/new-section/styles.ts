import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.medium};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    color: ${theme.colors.border};
    border-style: solid;
    padding-top: 100%;
    transition: 0.3s;

    & * {
      transition: 0.3s;
      cursor: pointer;
      color: ${theme.colors.text};
      user-select: none;
    }

    &:hover,
    &:hover * {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    gap: ${theme.spacings.xsmall};
  `}
`;
