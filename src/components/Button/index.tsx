import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return <S.Container onClick={onClick}>{text}</S.Container>;
}
