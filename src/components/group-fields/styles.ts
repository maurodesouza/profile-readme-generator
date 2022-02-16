import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacings.medium};
    padding-top: ${theme.spacings.medium};
    border-top-width: ${theme.border.width};
    border-top-color: ${theme.colors.border};
    border-top-style: solid;
  `}
`;

type FieldsProps = {
  columns: number;
};

export const Fields = styled.div<FieldsProps>`
  ${({ theme, columns }) => css`
    display: grid;
    grid-row-gap: ${theme.spacings.xsmall};
    grid-column-gap: ${theme.spacings.medium};
    grid-template-columns: repeat(${columns}, 1fr);
  `}
`;

type FieldProps = {
  column: string;
};

export const Field = styled.div<FieldProps>`
  ${({ column }) => css`
    grid-column: ${column};
  `}
`;

export const Reset = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
    text-align: right;
    margin-top: ${theme.spacings.small};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `}
`;
