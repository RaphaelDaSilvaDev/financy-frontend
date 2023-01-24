import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Page } from "../../components/Page";
import * as S from "./styles";

export function HeaderLayout() {
  return (
    <Page>
      <S.Container>
        <Header />
        <Outlet />
      </S.Container>
    </Page>
  );
}
