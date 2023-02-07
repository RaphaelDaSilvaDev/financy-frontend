import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    user-select: none;

    cursor: pointer;

    & > span {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
`;

export const NoImage = styled.label`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100%;

  align-self: center;

  background-color: ${(props) => props.theme.background};
`;

export const Image = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100%;

  align-self: center;

  background-color: ${(props) => props.theme.background};
`;
