import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    height: 9rem;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid: 'image project' 'image mention';
    height: 100%;
    column-gap: ${theme.spacings.small};
  `}
`;

export const Image = styled.img`
  grid-area: image;
  align-self: center;
`;

export const Project = styled.strong`
  grid-area: project;
  align-self: end;
`;

export const Mention = styled.small`
  grid-area: mention;
  align-self: start;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: ${theme.spacings.medium};
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
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.3);
    }
  `}
`;
