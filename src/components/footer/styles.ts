// @ts-ignore
import styled, { css } from 'styled-components';
import { media } from 'styles';

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
    display: none;
    grid: 'image project' 'image mention';
    height: 100%;
    column-gap: ${theme.spacings.small};
    flex-shrink: 0;

    ${media.greaterThan('desktop')`
      display: grid;
    `}
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
    flex-wrap: wrap;
    column-gap: calc(${theme.spacings.xlarge} * 2);
    row-gap: ${theme.spacings.xsmall};

    ${media.greaterThan('desktop')`
      column-gap: ${theme.spacings.medium};
    `}
  `}
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
j `}
`;

export const GenerateLink = styled.a`
  ${({ theme }) => css`
    border: none;
    display: grid;
    place-items: center;
    background: ${theme.colors.success};
    color: black;
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 16.5rem;
    height: 3.2rem;
    font-weight: ${theme.font.weights.bold};
    padding: 0 ${theme.spacings.medium};
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.3);
      text-decoration: none;
    }
  `}
`;

export const NavRestoreInput = styled.input`
  display: none;
`;
export const NavBackupButton = styled.a`
  ${({ theme }) => css`
    border: none;
    display: grid;
    place-items: center;
    background: ${theme.colors.primary};
    color: white;
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 16.5rem;
    height: 3.2rem;
    font-weight: ${theme.font.weights.bold};
    padding: 0 ${theme.spacings.medium};
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.3);
      text-decoration: none;
    }
  `}
`;
export const NavRestoreButton = styled.label`
  ${({ theme }) => css`
    border: none;
    display: grid;
    place-items: center;
    background: ${theme.colors.secondary};
    color: black;
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 16.5rem;
    height: 3.2rem;
    font-weight: ${theme.font.weights.bold};
    padding: 0 ${theme.spacings.medium};
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.3);
      text-decoration: none;
    }
  `}
`;
