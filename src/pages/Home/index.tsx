import { Button } from "../../components/Button";
import { Wrapper } from "../../components/Page/styles";
import { Widget } from "../../components/Widget";
import { ListGoals } from "./components/ListGoals";

import * as S from "./styles";

export function Home() {
  return (
    <Wrapper>
      <S.Container>
        <Widget title="Adicionar entrada">
          <Button text="Adicionar Entrada" />
        </Widget>

        <ListGoals />
      </S.Container>
    </Wrapper>
  );
}
