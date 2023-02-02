import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Trash, Vault } from "phosphor-react";
import { useContext } from "react";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";
import * as S from "./styles";

export function ListEntries() {
  const { entries, selectedGoal, goals } = useContext(HomeContext);

  const goalSelected = goals.find((goal) => goal.id === selectedGoal);

  return (
    <S.Container>
      {entries.map((entry) => {
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
                <S.Trash>
                  <Trash color="#fff" />
                </S.Trash>
              </S.Info>
            </S.RowContent>
          </Widget>
        );
      })}
    </S.Container>
  );
}
