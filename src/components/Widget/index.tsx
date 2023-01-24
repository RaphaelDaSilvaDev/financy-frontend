import * as S from "./styles";

interface WidgetProps {
  title: string;
  options?: JSX.Element;
  children: React.ReactNode;
}

export function Widget({ title, options, children }: WidgetProps) {
  return (
    <S.Container>
      <S.Header>
        <span>{title}</span>
        {options}
      </S.Header>
      {children}
    </S.Container>
  );
}
