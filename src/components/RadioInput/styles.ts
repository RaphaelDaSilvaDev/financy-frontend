import styled from "styled-components";

interface InputProps {
  color: "red" | "yellow" | "green" | "primary";
}

export const InputContainer = styled.label<InputProps>`
  display: block;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & > span {
    position: absolute;
    top: 2px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: transparent;
    border-radius: 4px;
    border: 4px solid ${(props) => props.theme.otherColors[props.color]};
  }

  :hover input ~ span {
    background-color: ${(props) => props.theme.otherColors[props.color]};
    border: 4px solid ${(props) => props.theme.otherColors[props.color]};
    filter: brightness(1.25);
  }

  :hover input:checked ~ span {
    background-color: ${(props) => props.theme.otherColors[props.color]};
    border: 4px solid ${(props) => props.theme.otherColors[props.color]};
    filter: brightness(1.25);
  }

  & > input:checked ~ span {
    background-color: ${(props) => props.theme.otherColors[props.color]};
  }

  & > span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & > input:checked ~ span:after {
    display: block;
  }
`;
