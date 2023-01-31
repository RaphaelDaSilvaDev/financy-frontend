import axios from "axios";
import { Eye } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { ToastStyle } from "../../../../components/Toast/ToastStyle";
import { Widget } from "../../../../components/Widget";
import { Title } from "./components/Title";
import { GoalInterface } from "./interfaces";
import { GetAllGoalsService } from "./services";

import * as S from "./styles";

export function ListGoals() {
  const firstRender = useRef(true);
  const [goals, setGoals] = useState<GoalInterface[]>([]);

  async function GetData() {
    try {
      const { data } = await GetAllGoalsService();
      setGoals(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  useEffect(() => {
    if (!firstRender.current) {
      GetData();
    } else {
      firstRender.current = false;
    }
  }, []);
  return (
    <S.Container>
      {goals.map((goal) => (
        <S.Content key={goal.id}>
          <Widget title={<Title color={goal.color} title={goal.name} />}>
            <S.GoalContent>
              <S.GoalValue>
                <S.Bar />
                <span>R$500,00</span>
              </S.GoalValue>
              <Eye size={18} />
            </S.GoalContent>
          </Widget>
        </S.Content>
      ))}
    </S.Container>
  );
}
