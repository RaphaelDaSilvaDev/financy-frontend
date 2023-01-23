import { useFormContext, UseFormRegister } from "react-hook-form";
import * as S from "./styles";

interface InputProps {
  label: string;
  placeHolder: string;
  type?: string;
  registerValue: string;
}

export function Input({ label, placeHolder, type, registerValue }: InputProps) {
  const { register } = useFormContext();

  return (
    <S.InputContainer>
      <label>
        {label}
        <input placeholder={placeHolder} type={type} {...register(registerValue)} />
      </label>
    </S.InputContainer>
  );
}
