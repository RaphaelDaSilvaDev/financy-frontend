import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { Wrapper } from "../../components/Page/styles";
import { Widget } from "../../components/Widget";

import * as S from "./styles";

export function Home() {
  return (
    <Wrapper>
      <S.Container>
        <Widget title="Adicionar entrada">
          <Button text="Adicionar Entrada" />
        </Widget>
      </S.Container>
    </Wrapper>
  );
}
