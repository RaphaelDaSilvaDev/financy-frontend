import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const Square = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 4px;
  border: 4px solid ${(props) => props.theme.primary};
`;
