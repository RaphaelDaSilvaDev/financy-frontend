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

  cursor: pointer;

  background-color: ${(props) => props.theme.primary};
`;

export const Trash = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${(props) => props.theme.danger};
`;

export const Legend = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    & > span {
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
`;

export const LineBar = styled.hr`
  width: 2rem;
  background-color: transparent;
  border: none;
  height: 0.2rem;
  background: ${(props) => props.theme.primary};
`;

export const DashedBar = styled.hr`
  width: 2rem;
  background-color: transparent;
  border: none;
  height: 0.2rem;
  background: repeating-linear-gradient(
    90deg,
    ${(props) => props.theme["text-secondary"]},
    ${(props) => props.theme["text-secondary"]} 4px,
    transparent 4px,
    transparent 8px
  );
`;
