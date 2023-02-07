import { Pencil, Trash } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components/Loading";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { SplineGraph } from "./components/SplineGraph";
import * as S from "./styles";

export function Graph() {
  const navigate = useNavigate();
  const { selectedGoal, totalBalance, loading, entries, RemoveGoal } = useContext(HomeContext);

  function handleEditGoal() {
    navigate(`/goal/edit/${selectedGoal?.id}`);
  }

  return (
    <>
      {entries.length === 0 && !selectedGoal ? (
        <></>
      ) : (
        <S.Container>
          {loading.goals || loading.graph ? (
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
                    <S.Edit onClick={handleEditGoal}>
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
