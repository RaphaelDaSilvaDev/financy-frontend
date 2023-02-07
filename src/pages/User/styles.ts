import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  top: -4rem;
`;

export const EditProfile = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  align-items: flex-end;
  gap: 2.4rem;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
`;

export const SwitchTheme = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-weight: 300;
  }
`;

export const SelectContainer = styled.div`
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
`;

export const SelectInput = styled(Select)`
  width: 100%;

  & > div:first-of-type {
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
  }

  & > div:last-of-type {
    width: 100%;

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

    & > div > div {
      color: ${(props) => props.theme.text};
    }

    & > div:last-of-type > div {
      background-color: transparent;

      :hover {
        background-color: ${(props) => props.theme["background-light"]};
      }
    }
  }
`;
