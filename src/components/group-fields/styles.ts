import styled, { css, DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    & + & ${Label} {
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`;

type LabelProps = {
  hasAccordion: boolean;
};

const labelModifiers = {
  accordion: (theme: DefaultTheme) => css`
    cursor: pointer;
    margin-bottom: 0;

    &:hover {
      color: ${theme.colors.primary};
    }
  `,
};

export const Label = styled.span<LabelProps>`
  ${({ theme, hasAccordion }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.medium};
    border-top-width: ${theme.border.width};
    border-top-color: ${theme.colors.border};
    font-size: ${theme.font.sizes.medium};

    ${hasAccordion && labelModifiers.accordion(theme)}
  `}
`;

export const WrapperIcon = styled(motion.div)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    color: inherit;
    display: grid;
    place-items: center;
  `}
`;

type FieldsProps = {
  columns: number;
};

export const Grow = styled(motion.div)``;

export const Fields = styled(motion.div)<FieldsProps>`
  ${({ theme, columns }) => css`
    display: grid;
    grid-row-gap: ${theme.spacings.small};
    grid-column-gap: ${theme.spacings.medium};
    grid-template-columns: repeat(${columns}, 1fr);
  `}
`;

type FieldProps = {
  column: string;
};

export const Field = styled(motion.div)<FieldProps>`
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
