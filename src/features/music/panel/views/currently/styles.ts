import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
    padding-left: 16px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 4px;
      background: ${theme.colors.tertiary};
    }
  `}
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin-left: 16px;
  position: relative;
  list-style: circle;
`;
