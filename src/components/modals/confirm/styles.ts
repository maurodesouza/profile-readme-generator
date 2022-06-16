import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > button:last-child {
    margin-left: 15px;
  }
`;

export const ButtonCancel = styled.button`
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Button = styled.button<{ onDelete: boolean }>`
  ${({ onDelete }) => css`
    border: 1px solid #f00;
    padding: 5px 10px;
    border-radius: 10px;
    color: ${onDelete ? 'red' : 'auto'};
  `}
`;
