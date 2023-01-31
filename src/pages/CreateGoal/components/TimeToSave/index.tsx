import { useFormContext } from "react-hook-form";
import { RadioInput } from "../../../../components/RadioInput";
import { Widget } from "../../../../components/Widget";

import * as S from "../../styles";

export function TimeToSave() {
  const methods = useFormContext();

  return (
    <S.SeparateBy>
      <Widget title="Finalizar meta por">
        <S.SeparateByContent>
          <RadioInput registerValue="end_by" value="time" label="Tempo" name="end_by" />
          <RadioInput registerValue="end_by" value="amount" label="Quantia" name="end_by" />
          <RadioInput
            registerValue="end_by"
            value="indeterminate"
            label="Indeterminado"
            name="end_by"
          />
        </S.SeparateByContent>
      </Widget>

      {methods.watch("end_by") === "time" ? (
        <Widget title="Selecione o tempo total da meta">
          <S.SeparateByValue>
            <S.SeparatedByValueBar />
            <S.DateInput type="number" placeholder="2" {...methods.register("end_by_value")} />
            <span>Mês</span>
          </S.SeparateByValue>
        </Widget>
      ) : methods.watch("end_by") === "amount" ? (
        <Widget title="Selecione a quantia total da meta">
          <S.SeparateByValue>
            <S.SeparatedByValueBar />
            <span>R$</span>
            <S.Input
              type="number"
              placeholder="250,00"
              step={0.01}
              {...methods.register("end_by_value")}
            />
          </S.SeparateByValue>
        </Widget>
      ) : (
        <Widget title="Meta com tempo indeterminado">
          <S.IndeterminateTime>
            <span>A meta não tem um objetivo final</span>
          </S.IndeterminateTime>
        </Widget>
      )}
    </S.SeparateBy>
  );
}
