import { useFormContext } from "react-hook-form";
import { RadioInput } from "../../../../components/RadioInput";
import { Widget } from "../../../../components/Widget";

import * as S from "../../styles";

interface SaveByProps {
  availablePercentage: number | undefined;
}

export function SaveBy({ availablePercentage = 0 }: SaveByProps) {
  const methods = useFormContext();

  const value = methods.watch("income_value");

  const size = ((Number(value) - 0) * 100) / (availablePercentage - 0) + "% 100%";

  const bulletPosition = value / availablePercentage;
  const position = bulletPosition * 475 + "px";

  return (
    <S.SeparateBy>
      <Widget title="Separar quantia por">
        <S.SeparateByContent>
          <RadioInput
            registerValue="income_type"
            value="percentage"
            label="Porcentagem"
            name="income_type"
          />
          <RadioInput
            registerValue="income_type"
            value="amount"
            label="Quantia"
            name="income_type"
          />
        </S.SeparateByContent>
      </Widget>
      {methods.watch("income_type") === "amount" ? (
        <Widget title="Selecione a quantia para cada entrada">
          <S.SeparateByValue>
            <S.SeparatedByValueBar />
            <span>R$</span>
            <S.Input
              type="number"
              placeholder="250,00"
              step={0.01}
              {...methods.register("income_value")}
            />
          </S.SeparateByValue>
        </Widget>
      ) : (
        <Widget
          title="Selecione a porcentagem para cada entrada"
          subtitle={`Disponível: ${availablePercentage}%`}
        >
          <S.SeparatedByPercentageContent>
            {availablePercentage !== 0 ? (
              <>
                <S.Percentage sizeChange={position}>{value}</S.Percentage>
                <S.SeparatedByPercentage
                  sizeChange={size}
                  type="range"
                  min="0"
                  max={availablePercentage}
                  {...methods.register("income_value")}
                />
              </>
            ) : (
              <>
                <S.Warning>Você já usou toda porcentagem disponível em outras metas</S.Warning>
              </>
            )}
          </S.SeparatedByPercentageContent>
        </Widget>
      )}
    </S.SeparateBy>
  );
}
