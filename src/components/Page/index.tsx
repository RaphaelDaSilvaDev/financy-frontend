import { Outlet } from "react-router-dom";
import * as S from "./styles";

interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return <S.Page>{children}</S.Page>;
}
