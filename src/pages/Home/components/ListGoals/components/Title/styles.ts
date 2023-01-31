import styled from "styled-components";
import { ColorsInterface } from "../../../../../../interfaces/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

interface SquareProps {
  color: ColorsInterface;
}

export const Square = styled.div<SquareProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 4px;
  border: 4px solid ${(props) => props.theme.otherColors[props.color]};
`;
