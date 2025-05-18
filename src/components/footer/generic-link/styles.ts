import styled, { css } from 'styled-components';

export const Button = styled.span`
  ${({ theme }) => css`
    border: none;
    display: grid;
    place-items: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 16.5rem;
    height: 3.2rem;
    font-weight: ${theme.font.weights.bold};
    padding: 0 ${theme.spacings.medium};
    transition: filter 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(1.3);
    }
  `}
`;
