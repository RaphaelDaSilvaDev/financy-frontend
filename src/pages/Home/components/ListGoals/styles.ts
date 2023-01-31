import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  align-items: center;
  gap: 2.4rem;
`;

export const Content = styled.div`
  width: 100%;
  min-width: 30rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const GoalContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoalValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Bar = styled.div`
  width: 0.4rem;
  height: 1.8rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme.primary};
`;
