import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CheckBoxInput } from "../../components/CheckBoxInput";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Page/styles";
import { RadioInput } from "../../components/RadioInput";
import { Widget } from "../../components/Widget";
import { CreateGoalSchema, CreateGoalSchemaType } from "./shemas";

import * as S from "./styles";

export function CreateGoal() {
  const method = useForm<CreateGoalSchemaType>({
    resolver: zodResolver(CreateGoalSchema),
    mode: "onSubmit",
    defaultValues: {
      incomeType: "percentage",
      incomeValue: "0",
    },
  });

  function handleAddGoal() {}

  const value = method.watch("incomeValue");

  const size = ((Number(value) - 0) * 100) / (100 - 0) + "% 100%";

  return (
    <Wrapper>
      <S.Container>
        <FormProvider {...method}>
          <Widget title="Adicionar Meta">
            <Input
              label="Nome da Meta"
              placeHolder="Digite o nome da Meta"
              type="text"
              registerValue="name"
            />
          </Widget>

          <Widget title="Selecionar cor da meta">
            <S.ColorContent>
              <RadioInput registerValue="color" color="green" value="green" name="color" />
              <RadioInput registerValue="color" color="red" value="red" name="color" />
              <RadioInput registerValue="color" color="yellow" value="yellow" name="color" />
            </S.ColorContent>
          </Widget>

          <S.SeparateBy>
            <Widget title="Separar quantia por">
              <S.SeparateByContent>
                <RadioInput
                  registerValue="incomeType"
                  value="percentage"
                  label="Porcentagem"
                  name="incomeType"
                />
                <RadioInput
                  registerValue="incomeType"
                  value="amount"
                  label="Quantia"
                  name="incomeType"
                />
              </S.SeparateByContent>
            </Widget>
            {method.watch("incomeType") === "amount" ? (
              <Widget title="Selecione a quantia para cada entrada">
                <S.SeparateByValue>
                  <S.SeparatedByValueBar />
                  <span>R$</span>
                  <S.Input type="number" placeholder="250,00" />
                </S.SeparateByValue>
              </Widget>
            ) : (
              <Widget title="Selecione a porcentagem para cada entrada">
                <S.SeparatedByPercentage
                  sizeChange={size}
                  type="range"
                  min="0"
                  max="100"
                  {...method.register("incomeValue")}
                />
              </Widget>
            )}
          </S.SeparateBy>
        </FormProvider>
      </S.Container>
    </Wrapper>
  );
}
