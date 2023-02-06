import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Trash, Vault } from "phosphor-react";
import { useContext } from "react";
import { Loading } from "../../../../components/Loading";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";
import * as S from "./styles";

export function ListEntries() {
  const { entries, selectedGoal, goals, loading, RemoveEntry, RemoveEntryGoal } =
    useContext(HomeContext);

  const goalSelected = goals.find((goal) => goal.id === selectedGoal?.id);

  function handleOnRemoveEntry(id: string) {
    if (goalSelected) {
      RemoveEntryGoal(id);
    } else {
      RemoveEntry(id);
    }
  }

  return (
    <S.Container>
      {loading.entries ? (
        <Loading />
      ) : entries.length !== 0 ? (
        entries.map((entry) => {
          const balance = Number(entry.income) - Number(entry.outcome);
          return (
            <Widget key={entry.id}>
              <S.RowContent>
                <Title
                  color={goalSelected?.color || "primary"}
                  title={goalSelected?.name || "Entrada"}
                />
                {entry.value ? (
                  <S.Balance isPositive={Number(entry.value) > 0}>R${entry.value}</S.Balance>
                ) : (
                  <S.Balance isPositive={balance > 0}>R${balance}</S.Balance>
                )}
                <S.Info>
                  <span>
                    {formatDistanceToNow(new Date(entry.created_at), {
                      locale: ptBr,
                      addSuffix: true,
                    })}
                  </span>
                  <S.Trash onClick={() => handleOnRemoveEntry(entry.id)}>
                    <Trash color="#fff" />
                  </S.Trash>
                </S.Info>
              </S.RowContent>
            </Widget>
          );
        })
      ) : (
        <Widget>
          <span>Nenhuma entrada encontrada!</span>
        </Widget>
      )}
    </S.Container>
  );
}
