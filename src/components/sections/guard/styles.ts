import styled, { css } from 'styled-components';

import { SimpleInput } from 'components/inputs';

export const Container = styled.form`
  ${({ theme }) => css`
    width: min(100%, 30rem);
    margin-inline: auto;
    text-align: center;
    display: grid;
    grid: 'icon text' 'input input' / 2.4rem 1fr;
    row-gap: ${theme.spacings.large};
  `}
`;

export const AlertWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    grid-area: icon;
    display: grid;
    place-items: center;
  `}
`;

export const Text = styled.p`
  grid-area: text;
`;

export const Input = styled(SimpleInput)`
  grid-area: input;
`;
