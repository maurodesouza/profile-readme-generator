import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Container = styled.div`
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
