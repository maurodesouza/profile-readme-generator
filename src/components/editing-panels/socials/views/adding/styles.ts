import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    padding: 8px 12px;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
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

export const Block = styled.div`
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

export const WrapperImg = styled.div`
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

export const Image = styled.img`
  width: 40%;
  height: 40%;
`;
