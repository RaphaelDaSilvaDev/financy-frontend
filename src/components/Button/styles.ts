import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme["button-text"]};
  cursor: pointer;

  border-radius: 8px;
  border: 0;
  outline: 0;

  :hover {
    background-color: ${(props) => props.theme["primary-light"]};
    transition: background-color 175ms;
  }
`;
