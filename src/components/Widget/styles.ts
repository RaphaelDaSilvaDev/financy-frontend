import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: ${(props) =>
    props.isSelected ? props.theme.primary : props.theme["background-light"]};

  position: relative;
  border-radius: 16px;
  padding: 1.6rem;

  border: 2px solid ${(props) => props.theme.background};

  color: ${(props) => props.isSelected && defaultTheme.dark.text};
  transition: all 0.5s ease;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
`;
