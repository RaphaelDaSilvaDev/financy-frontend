import { Pencil, Trash } from "phosphor-react";
import { useContext } from "react";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import * as S from "./styles";

export function Graph() {
  const { selectedGoal, totalBalance } = useContext(HomeContext);

  return (
    <S.Container>
      <Widget>
        <S.Title>
          {selectedGoal ? (
            <span>
              A meta {selectedGoal.name} tem o saldo de R$<strong>{selectedGoal.balance}</strong>
            </span>
          ) : (
            <span>
              O total de entradas é de R$<strong>{totalBalance}</strong>
            </span>
          )}
        </S.Title>
        <S.Buttons>
          <S.Edit>
            <Pencil color="#FFF" />
          </S.Edit>

          <S.Trash>
            <Trash color="#FFF" />
          </S.Trash>
        </S.Buttons>
      </Widget>
    </S.Container>
  );
}
