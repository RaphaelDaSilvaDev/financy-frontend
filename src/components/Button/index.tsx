import * as S from "./styles";

interface ButtonProps {
  text: string;
  type?: "normal" | "danger";
  onClick?: () => void;
}

export function Button({ text, onClick, type = "normal" }: ButtonProps) {
  return (
    <S.Container onClick={onClick} typeColor={type}>
      {text}
    </S.Container>
  );
}
