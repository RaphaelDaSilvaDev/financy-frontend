import { useFormContext } from "react-hook-form";
import { ColorsInterface } from "../../interfaces/colors";

import * as S from "./styles";

interface RadioInputProps {
  label?: string;
  value: string;
  color?: ColorsInterface;
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
