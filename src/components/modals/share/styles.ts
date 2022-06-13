import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Socials = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.large};
    margin-block: ${theme.spacings.xlarge};
  `}
`;

export const Social = styled.button`
  ${({ theme }) => css`
    border-width: ${theme.border.width};
    border-style: solid;
    border-radius: 10rem;
    padding: 1.5rem;
    color: ${theme.colors.text};

    &:hover {
      color: ${theme.colors.primary};
    }

    svg {
      color: inherit;

      &:hover {
        color: inherit;
      }
    }

    * {
      cursor: pointer;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    position: relative;
  `}
`;

export const CopyButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    right: ${theme.spacings.medium};
    transform: translateY(-50%);

    * {
      cursor: pointer;
    }

    svg {
      color: ${theme.colors.text};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;
