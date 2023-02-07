import { format, subYears } from "date-fns";
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
      <label htmlFor={registerValue}>
        <span>{label}</span>
      </label>
      <input
        placeholder={placeHolder}
        type={type}
        max={type === "date" ? format(subYears(new Date(), 16), "yyyy-MM-dd") : ""}
        {...register(registerValue)}
        id={registerValue}
      />
    </S.InputContainer>
  );
}
