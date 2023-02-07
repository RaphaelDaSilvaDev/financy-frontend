import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    width: fit-content;
    user-select: none;
    cursor: pointer;

    & > span {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
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
    transition: all 0.5s ease;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
      filter: ${(props) => (props.theme.background === "#E5EFF8" ? "" : "invert(1)")};
    }
  }
`;
