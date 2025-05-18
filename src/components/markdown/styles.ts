import styled from 'styled-components';

export const Container = styled.div(
  ({ theme }) => `
    width: 100%;

    h1, h2, h3, pre, ul {
      margin-bottom: ${theme.spacings.large};
    }

    pre {
      padding: ${theme.spacings.medium};
      border-width: ${theme.border.width};
      border-color: ${theme.colors.border};
      border-style: solid;
      border-radius: ${theme.border.radius};
    }

    code {
      line-break: normal;
    }
`
);
