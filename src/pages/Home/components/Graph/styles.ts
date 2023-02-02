import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.4rem;

  position: relative;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    width: 80%;
    text-align: center;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Edit = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.primary};
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
