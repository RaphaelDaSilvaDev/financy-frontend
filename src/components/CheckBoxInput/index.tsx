import { useFormContext } from "react-hook-form";
import * as S from "./styles";

interface CheckBoxProps {
  label?: string;
  registerValue: string;
}

export function CheckBoxInput({ label, registerValue }: CheckBoxProps) {
  const { register } = useFormContext();

  return (
    <S.InputContainer>
      {label}
      <input type="checkbox" {...register(registerValue)} />
      <span className="checkmark"></span>
    </S.InputContainer>
  );
}
