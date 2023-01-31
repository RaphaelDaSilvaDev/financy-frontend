import * as S from "./styles";

interface WidgetProps {
  title: string | JSX.Element;
  subtitle?: string;
  options?: JSX.Element;
  children: React.ReactNode;
}

export function Widget({ title, subtitle, options, children }: WidgetProps) {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <span>{title}</span>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.HeaderContent>
        {options}
      </S.Header>
      {children}
    </S.Container>
  );
}
