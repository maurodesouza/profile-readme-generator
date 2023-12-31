import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: calc(100% + ${theme.spacings.medium});
    margin-top: ${theme.spacings.medium};
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-right: ${theme.spacings.xsmall};
    height: 100%;

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
