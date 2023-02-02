import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";

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

  cursor: pointer;

  transition: scale 175ms;

  :hover {
    scale: 1.05;
  }
`;

interface GoalContentProps {
  isSelected: boolean;
}

export const GoalContent = styled.div<GoalContentProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.isSelected && defaultTheme.dark.text};
  }

  svg {
    color: ${(props) => props.isSelected && defaultTheme.dark.text};
  }
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

  background-color: ${(props) => props.theme["primary-light"]};
`;
