import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    display: grid;
    grid: 'image name' 'image description' '. see-more' / 4rem 1fr;
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.xsmall};
  `}
`;

export const Image = styled.img`
  grid-area: image;
  width: 100%;
  align-self: center;
`;

export const Name = styled.h3`
  grid-area: name;
  align-self: start;
`;

export const Description = styled.p`
  grid-area: description;
  align-self: start;
`;

export const SeeMore = styled.a`
  grid-area: see-more;
  justify-self: end;
  align-self: center;
`;
