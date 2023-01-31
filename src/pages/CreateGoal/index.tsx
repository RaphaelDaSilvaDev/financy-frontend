import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Page/styles";
import { RadioInput } from "../../components/RadioInput";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { Widget } from "../../components/Widget";
import { SaveBy } from "./components/SaveBy";
import { TimeToSave } from "./components/TimeToSave";
import { CreateGoalService, GetAvailablePercentageService } from "./service";
import { CreateGoalSchema, CreateGoalSchemaType } from "./schemas";

import * as S from "./styles";

export function CreateGoal() {
  const firstRender = useRef(true);
  const navigation = useNavigate();

  const [availablePercentage, setAvailablePercentage] = useState<number>();

  const methods = useForm<CreateGoalSchemaType>({
    resolver: zodResolver(CreateGoalSchema),
    mode: "onSubmit",
    defaultValues: {
      income_type: "percentage",
      income_value: "0",
      end_by: "time",
      color: "red",
    },
  });

  async function handleAddGoal() {
    const values = methods.getValues();
    try {
      await CreateGoalService({ ...values });
      ToastStyle({ message: "Meta criada com sucesso", styleToast: "success" });
      navigation("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function onHandleAddGoalFail() {
    const errors = Object.values(methods.formState.errors);

    errors.map((error) => {
      ToastStyle({ message: error.message ? error.message : "", styleToast: "warning" });
    });
  }

  async function getAvailablePercentage() {
    try {
      const { data } = await GetAvailablePercentageService();
      setAvailablePercentage(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  useEffect(() => {
    if (!firstRender.current) {
      getAvailablePercentage();
    } else {
      firstRender.current = false;
    }
  }, []);

  return (
    <Wrapper>
      <S.Container>
        <FormProvider {...methods}>
          <S.Content onSubmit={methods.handleSubmit(handleAddGoal, onHandleAddGoalFail)}>
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
                <RadioInput registerValue="color" color="red" value="red" name="color" />
                <RadioInput registerValue="color" color="orange" value="orange" name="color" />
                <RadioInput registerValue="color" color="yellow" value="yellow" name="color" />
                <RadioInput registerValue="color" color="green" value="green" name="color" />
                <RadioInput registerValue="color" color="purple" value="purple" name="color" />
                <RadioInput
                  registerValue="color"
                  color="dark-blue"
                  value="dark-blue"
                  name="color"
                />
                <RadioInput registerValue="color" color="pink" value="pink" name="color" />
                <RadioInput registerValue="color" color="gray" value="gray" name="color" />
              </S.ColorContent>
            </Widget>

            <SaveBy availablePercentage={availablePercentage} />

            <TimeToSave />

            <Button text="Adicionar meta" />
          </S.Content>
        </FormProvider>
      </S.Container>
    </Wrapper>
  );
}
