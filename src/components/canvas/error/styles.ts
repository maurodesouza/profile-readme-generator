import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: ${theme.spacings.xlarge};

    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    max-width: 65rem;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    align-items: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border-width: ${theme.border.width};
    border-radius: ${theme.border.radius};
    border-style: solid;
    border-color: ${theme.colors.border};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `}
`;
