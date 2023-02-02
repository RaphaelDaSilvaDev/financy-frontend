import axios from "axios";
import { Eye } from "phosphor-react";
import { useContext } from "react";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";

import * as S from "./styles";

export function ListGoals() {
  const { goals, selectedGoal, HandleSelectGoal } = useContext(HomeContext);

  return (
    <S.Container>
      {goals.map((goal) => (
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
              <Eye size={18} />
            </S.GoalContent>
          </Widget>
        </S.Content>
      ))}
    </S.Container>
  );
}
