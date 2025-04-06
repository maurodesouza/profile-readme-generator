import styled, { css } from 'styled-components';

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
