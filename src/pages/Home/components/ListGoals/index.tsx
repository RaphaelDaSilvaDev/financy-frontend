import { Eye } from "phosphor-react";
import { useContext, useEffect } from "react";
import PlaceholderLoading from "react-placeholder-loading";
import { Loading } from "../../../../components/Loading";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";

import * as S from "./styles";

export function ListGoals() {
  const { goals, selectedGoal, HandleSelectGoal, loading, GetGoals } = useContext(HomeContext);

  useEffect(() => {
    GetGoals();
  }, []);

  return (
    <>
      {!loading.goals && goals.length === 0 ? (
        <Widget>
          <span>Nenhuma meta encontrada!</span>
        </Widget>
      ) : (
        <S.Container>
          {loading.goals ? (
            <>
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            goals.map((goal) => (
              <S.Content key={goal.id} onClick={() => HandleSelectGoal(goal)}>
                <Widget
                  title={<Title color={goal.color} title={goal.name} />}
                  select={goal.id === selectedGoal?.id}
                >
                  <S.GoalContent isSelected={goal.id === selectedGoal?.id}>
                    <S.GoalValue>
                      <S.Bar />
                      <span>R${goal.balance}</span>
                    </S.GoalValue>
                  </S.GoalContent>
                </Widget>
              </S.Content>
            ))
          )}
        </S.Container>
      )}
    </>
  );
}
