import styled from "styled-components";

interface ContainerProps {
  typeColor: "normal" | "danger";
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 5.6rem;

  background-color: ${(props) =>
    props.typeColor === "normal" ? props.theme.primary : props.theme.danger};
  color: ${(props) => props.theme["button-text"]};
  cursor: pointer;

  border-radius: 8px;
  border: 0;
  outline: 0;

  :hover {
    background-color: ${(props) =>
      props.typeColor === "normal" ? props.theme["primary-light"] : props.theme["danger-light"]};};
    transition: background-color 175ms;
  }
`;
