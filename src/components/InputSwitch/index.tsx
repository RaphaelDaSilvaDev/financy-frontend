import { useContext } from "react";
import { ThemeContext } from "../../styles/themes/ThemeContext";
import * as S from "./styles";

interface InputSwitchProps {
  onChange: () => void;
}

export function InputSwitch({ onChange }: InputSwitchProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <S.Contaier>
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </S.Contaier>
  );
}
