import { useFormContext } from "react-hook-form";
import { CheckBoxInput } from "../../../../components/CheckBoxInput";
import * as S from "./styles";

interface TitleProps {
  title: string;
  registerValue: string;
}

export function Title({ title, registerValue }: TitleProps) {
  return (
    <S.Container>
      <CheckBoxInput registerValue={registerValue} label={title} />
    </S.Container>
  );
}
