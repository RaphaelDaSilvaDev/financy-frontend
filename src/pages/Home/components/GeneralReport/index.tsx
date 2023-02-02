import { useContext } from "react";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";
import * as S from "./styles";

export function GeneralReport() {
  const { generalReport } = useContext(HomeContext);
  return (
    <S.Container>
      <Widget title="Relatório">
        <S.Content>
          <S.BackGroundBar>
            {generalReport.map((report) => (
              <S.Bar color={report.color} sizeWith={report.percentage} key={report.id}>
                {Number(report.percentage) >= 10 && <span>{report.percentage}%</span>}
              </S.Bar>
            ))}
          </S.BackGroundBar>

          <S.Legend>
            {generalReport.map((report) => (
              <Title color={report.color} title={report.name} key={report.id} />
            ))}
          </S.Legend>
        </S.Content>
      </Widget>
    </S.Container>
  );
}
