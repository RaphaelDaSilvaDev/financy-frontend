import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: ${(props) => props.theme["background-light"]};

  position: relative;
  border-radius: 16px;
  padding: 1.6rem;

  border: 2px solid ${(props) => props.theme.background};

  color: ${(props) => props.theme.text};
  transition: all 0.5s ease;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
