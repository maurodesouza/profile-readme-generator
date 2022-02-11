import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: ${theme.font.weights.bold};
    margin-bottom: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-color: ${theme.colors.border};
    border-style: solid;
    padding: 8px 12px;
  `}
`;
