import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    display: grid;
    grid: 'image name name' 'image description description' '. tags see-more' / 4rem 1fr 6rem;
    column-gap: ${theme.spacings.small};
  `}
`;

export const Image = styled.img`
  grid-area: image;
  width: 100%;
`;

export const Name = styled.h3`
  grid-area: name;
  align-self: start;
`;

export const Description = styled.p`
  grid-area: description;
  align-self: start;
`;

export const Tags = styled.div`
  ${({ theme }) => css`
    grid-area: tags;
    display: flex;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.small};
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: calc(${theme.spacings.xsmall} / 4) ${theme.spacings.xsmall};
    border-radius: 1rem;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.bg};
    font-weight: ${theme.font.weights.bold};
  `}
`;

export const SeeMore = styled.a`
  grid-area: see-more;
  justify-self: end;
  align-self: center;
`;
