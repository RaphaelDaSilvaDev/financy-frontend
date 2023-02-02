import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
  top: -4rem;
`;

export const AddEntry = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  align-items: flex-end;
  gap: 2.4rem;
`;

export const Content = styled.div`
  width: 102%;
  height: calc(100vh - 32rem);

  position: relative;

  left: -1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-radius: 8px;

  overflow-y: auto;
`;
