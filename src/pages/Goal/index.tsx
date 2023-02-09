import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Page/styles";
import { RadioInput } from "../../components/RadioInput";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { Widget } from "../../components/Widget";
import { SaveBy } from "./components/SaveBy";
import { TimeToSave } from "./components/TimeToSave";
import {
  CreateGoalService,
  EditGoalService,
  GetAvailablePercentageService,
  GetGoalToEdit,
} from "./service";
import { CreateGoalSchema, CreateGoalSchemaType } from "./schemas";

import * as S from "./styles";
import { GoalProps } from "./interface";
import { Title } from "./components/Title";

export function CreateGoal() {
  const navigation = useNavigate();

  const routeParams = useParams<{ [key: string]: any }>();

  const [availablePercentage, setAvailablePercentage] = useState<number>();
  const [id, setId] = useState<string>("");
  const [editGoal, setEditGoal] = useState<GoalProps>();

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

  async function handleEditGoal() {
    const values = methods.getValues();
    try {
      await EditGoalService({ ...values }, id);
      ToastStyle({ message: "Meta editada com sucesso", styleToast: "success" });
      navigation("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
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

  async function getGoalToEdit() {
    try {
      const { data } = await GetGoalToEdit(id);
      setEditGoal(data);
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

  useEffect(() => {
    const id = routeParams.id;
    setId(id);
  }, [JSON.stringify(routeParams)]);

  useEffect(() => {
    if (id) {
      getGoalToEdit();
    }
  }, [id]);

  useEffect(() => {
    if (editGoal) {
      methods.setValue("color", editGoal?.color);
      methods.setValue("end_by", editGoal?.end_by);
      methods.setValue("end_by_value", Number(editGoal?.end_by_value));
      methods.setValue("income_type", editGoal?.income_type);
      methods.setValue("income_value", editGoal?.income_value);
      methods.setValue("name", editGoal?.name);
    }
  }, [editGoal]);

  useEffect(() => {
    getAvailablePercentage();
    window.scrollTo(0, 1);
  }, []);

  return (
    <Wrapper>
      <S.Container>
        <FormProvider {...methods}>
          <S.Content
            onSubmit={methods.handleSubmit(
              id ? handleEditGoal : handleAddGoal,
              onHandleAddGoalFail
            )}
          >
            <Widget
              title={id ? "Editar Meta" : "Adicionar Meta"}
              options={
                id ? (
                  <Title title="Marcar meta como Concluída" registerValue="finishedGoal" />
                ) : (
                  <></>
                )
              }
            >
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

            <Button text={id ? "Editar Meta" : "Adicionar meta"} />
          </S.Content>
        </FormProvider>
      </S.Container>
    </Wrapper>
  );
}
