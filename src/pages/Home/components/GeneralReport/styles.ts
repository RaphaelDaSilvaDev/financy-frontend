import styled from "styled-components";
import { ColorsInterface } from "../../../../interfaces/colors";
import { defaultTheme } from "../../../../styles/themes/default";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.4rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const BackGroundBar = styled.div`
  width: 100%;
  height: 2.4rem;

  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

interface BarProps {
  color: ColorsInterface;
  sizeWith: string;
}

export const ToolTip = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  padding: 1.6rem;

  background-color: ${(props) => props.theme["background-light"]};
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 8px;
`;

export const Bar = styled.div<BarProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.otherColors[props.color]};
  color: ${defaultTheme.dark.text};
`;

export const BarContent = styled.div<BarProps>`
  width: ${(props) => Number(props.sizeWith)}%;
  position: relative;
`;

export const Legend = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
