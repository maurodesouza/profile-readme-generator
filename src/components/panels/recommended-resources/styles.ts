import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    height: 100%;
  `}
`;

export const Header = styled.div``;

export const Title = styled.h2``;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Small = styled.small`
  font-style: italic;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    overflow-y: scroll;
    height: 100%;
    width: calc(100% + ${theme.spacings.medium});
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

export const Card = styled.div`
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
