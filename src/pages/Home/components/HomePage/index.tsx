import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Wrapper } from "../../../../components/Page/styles";
import { ToastStyle } from "../../../../components/Toast/ToastStyle";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { GeneralReport } from "../GeneralReport";
import { Graph } from "../Graph";
import { ListEntries } from "../ListEntries";
import { ListGoals } from "../ListGoals";
import { EntrySchema, EntrySchemaType } from "./schema";
import { AddEntryService } from "./services";

import * as S from "./styles";

export function Home() {
  const { Reload } = useContext(HomeContext);

  const methods = useForm<EntrySchemaType>({
    resolver: zodResolver(EntrySchema),
    mode: "onSubmit",
  });

  async function onHandleAddEntry() {
    const values = methods.getValues();

    try {
      const response = await AddEntryService(values);
      methods.reset();
      console.log(response);
      Reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function onErrorHandleAddEntry() {
    const errors = Object.values(methods.formState.errors);

    errors.map((error) => {
      ToastStyle({ message: error.message ? error.message : "", styleToast: "warning" });
    });
  }

  return (
    <Wrapper>
      <S.Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onHandleAddEntry, onErrorHandleAddEntry)}>
            <Widget title="Adicionar entrada">
              <S.AddEntry>
                <Input
                  label="Total da receita"
                  placeHolder="Digite o total da receita"
                  type="number"
                  registerValue="income"
                />
                <Input
                  label="Total da despesa"
                  placeHolder="Digite o total da despesa"
                  type="number"
                  registerValue="outcome"
                />
                <Button text="Adicionar Entrada" />
              </S.AddEntry>
            </Widget>
          </form>
        </FormProvider>

        <S.Content>
          <GeneralReport />

          <ListGoals />

          <Graph />

          <ListEntries />
        </S.Content>
      </S.Container>
    </Wrapper>
  );
}
