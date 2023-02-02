import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.4rem;
`;

export const RowContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface BalanceProps {
  isPositive: boolean;
}

export const Balance = styled.span<BalanceProps>`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;

  color: ${(props) => (props.isPositive ? props.theme.primary : props.theme.danger)};
`;

export const Info = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const Trash = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.danger};
`;
