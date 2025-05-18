import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.xlarge};
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xlarge};
    max-width: 1100px;
    margin: 0 auto;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: ${theme.spacings.xlarge};
    padding-right: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;

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

    p {
      margin-block: ${theme.spacings.large};
    }
  `}
`;

export const Resources = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: ${theme.spacings.xlarge};
  `}
`;
