import { ColorsInterface } from "../../../../../../interfaces/colors";
import * as S from "./styles";

interface TitleProps {
  title: string;
  color: ColorsInterface;
}

export function Title({ color, title }: TitleProps) {
  return (
    <S.Container>
      <S.Square color={color} />
      <span>{title}</span>
    </S.Container>
  );
}
