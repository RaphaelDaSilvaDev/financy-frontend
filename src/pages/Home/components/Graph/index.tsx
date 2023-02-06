import { Pencil, Trash } from "phosphor-react";
import { useContext } from "react";
import { Loading } from "../../../../components/Loading";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { SplineGraph } from "./components/SplineGraph";
import * as S from "./styles";

export function Graph() {
  const { selectedGoal, totalBalance, loading, entries, goals, RemoveGoal } =
    useContext(HomeContext);

  return (
    <>
      {entries.length === 0 && !selectedGoal ? (
        <></>
      ) : (
        <S.Container>
          {loading.goals ? (
            <Loading />
          ) : (
            <Widget>
              {selectedGoal ? (
                <>
                  <S.Title>
                    <span>
                      A meta {selectedGoal.name} tem o saldo de R$
                      <strong>{selectedGoal.balance}</strong>
                    </span>
                  </S.Title>
                  <S.Buttons>
                    <S.Edit>
                      <Pencil color="#FFF" />
                    </S.Edit>

                    <S.Trash onClick={() => RemoveGoal(selectedGoal.id)}>
                      <Trash color="#FFF" />
                    </S.Trash>
                  </S.Buttons>
                </>
              ) : (
                <S.Title>
                  <span>
                    O total de entradas é de R$<strong>{totalBalance}</strong>
                  </span>
                </S.Title>
              )}
              {entries.length !== 0 && <SplineGraph />}

              <S.Legend>
                <div>
                  <S.LineBar />
                  <span>Valor guardado</span>
                </div>
                <div>
                  <S.DashedBar />
                  <span>Expectativa de valor</span>
                </div>
              </S.Legend>
            </Widget>
          )}
        </S.Container>
      )}
    </>
  );
}
