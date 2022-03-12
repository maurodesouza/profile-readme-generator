import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    user-select: all;
    position: relative;
    width: 100%;
    padding: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    overflow: auto;
    padding-right: ${theme.spacings.small};

    &::-webkit-scrollbar {
      width: 0.8rem;
      height: 0.8rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.border};
    }

    &::-webkit-scrollbar-corner {
      background: ${theme.colors.text};
    }

    .token.punctuation {
      color: ${theme.colors.text};
    }

    .token.boolean,
    .token.constant,
    .token.deleted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag {
      color: ${theme.colors.primary};
    }

    .token.attr-name,
    .token.builtin,
    .token.char,
    .token.inserted,
    .token.selector,
    .token.string {
      color: ${theme.colors.tertiary};
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: ${theme.colors.secondary};
    }

    .token.bold,
    .token.important {
      font-weight: 700;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    code,
    pre {
      width: 100%;
      color: ${theme.colors.text};
    }

    code {
      white-space: pre;
    }

    pre {
      background: transparent;
    }
  `}
`;
