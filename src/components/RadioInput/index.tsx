import { useFormContext } from "react-hook-form";
import { string } from "zod";
import { defaultTheme } from "../../styles/themes/default";
import * as S from "./styles";

interface RadioInputProps {
  label?: string;
  value: string;
  color?: "red" | "yellow" | "green" | "primary";
  registerValue: string;
  name: string;
}

export function RadioInput({
  color = "primary",
  registerValue,
  value,
  label,
  name,
}: RadioInputProps) {
  const { register } = useFormContext();

  return (
    <S.InputContainer color={color}>
      {label}
      <input type="radio" value={value} {...register(registerValue)} name={name} />
      <span></span>
    </S.InputContainer>
  );
}
