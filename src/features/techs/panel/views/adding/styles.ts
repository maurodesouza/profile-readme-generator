import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
  `}
`;

export const Divider = styled.strong`
  ${({ theme }) => css`
    grid-column: 1 / 4;
    border-top-width: ${theme.border.width};
    border-top-style: solid;
    border-top-color: ${theme.colors.border};
    padding: ${theme.spacings.medium} 0px;
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width: calc(100% + ${theme.spacings.medium});
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    align-content: start;
    gap: ${theme.spacings.xsmall};
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
