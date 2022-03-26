import styled, { css } from 'styled-components';

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
