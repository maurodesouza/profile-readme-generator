import styled, { css } from 'styled-components';

type ContainerProps = {
  direction?: 'column' | 'row';
};

const containerModifiers = {
  column: () => css`
    flex-direction: column-reverse;
    align-items: start;

    ${Label} {
      margin-bottom: 0;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ direction }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;

    ${direction === 'column' && containerModifiers.column};
  `}
`;

export const Switch = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    height: 3.8rem;
    width: 5.8rem;
    padding: ${theme.spacings.small};
    margin-left: -${theme.spacings.xsmall};
    cursor: pointer;

    & * {
      cursor: pointer;
    }
  `}
`;

export const Slider = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    background: ${theme.colors.text};
    opacity: 0.3;
    border-radius: 10rem;
    transition: 0.3s;
  `}
`;

export const Track = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;

export const Dot = styled.div`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    border-radius: 10rem;
    background: ${theme.colors.text};
    transition: 0.3s;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    &:checked ~ {
      & ${Track} {
        transform: translateX(1.5rem);
      }

      & ${Slider}, & ${Track} ${Dot} {
        background: ${theme.colors.primary};
      }
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: ${theme.font.weights.bold};
    margin-bottom: 2px;
    width: 100%;
  `}
`;
