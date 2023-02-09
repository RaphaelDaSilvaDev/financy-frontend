import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  max-width: 112rem;

  padding-inline: 1.2rem;

  margin: 0 auto;
`;
