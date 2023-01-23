import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  & > label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    user-select: none;

    & > input {
      width: 100%;
      height: 5.6rem;
      padding-inline: 1.6rem;
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      border: 0;
      border-radius: 8px;
      outline: 0;
      ::placeholder {
        color: ${(props) => props.theme.placeholder};
      }
    }
  }
`;
