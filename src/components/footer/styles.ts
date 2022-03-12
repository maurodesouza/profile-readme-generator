import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin-top: auto;
    display: flex;
    flex-shrink: 0;
    padding: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    height: 9rem;
  `}
`;

export const GenerateLink = styled.a`
  ${({ theme }) => css`
    border: none;
    display: grid;
    place-items: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border-radius: ${theme.border.radius};
    height: 3.2rem;
    font-weight: ${theme.font.weights.bold};
    padding: 0 ${theme.spacings.xlarge};
    margin-left: auto;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.3);
    }
  `}
`;
