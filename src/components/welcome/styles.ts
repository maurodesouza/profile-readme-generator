import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.greaterThan('tablet')`
      padding-top: calc(${theme.spacings.xlarge} * 3);
    `}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: calc(${theme.spacings.xsmall} / 2);

    h2 {
      font-size: ${theme.font.sizes.medium};
    }

    span {
      display: none;
    }

    ${media.greaterThan('tablet')`
      span {
        display: initial;
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: calc(${theme.spacings.medium} * 2);
    margin-bottom: ${theme.spacings.xlarge};
    max-width: 46rem;
  `}
`;

export const Middle = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: left;
    gap: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.xlarge};
    max-width: 60rem;

    ${media.greaterThan('tablet')`
      display: flex;
    `}
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: auto;
    max-width: 37.5rem;

    button {
      color: ${theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const Templates = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.medium};
    overflow-y: scroll;
    align-items: start;
    align-content: start;

    width: 100%;

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
    text-align: center;
    inset: 0;
    gap: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
