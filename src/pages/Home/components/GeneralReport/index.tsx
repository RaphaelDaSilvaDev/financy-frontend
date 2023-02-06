import Tippy from "@tippyjs/react";
import { useContext } from "react";
import { Loading } from "../../../../components/Loading";
import { Widget } from "../../../../components/Widget";
import { HomeContext } from "../../context";
import { Title } from "./components/Title";
import * as S from "./styles";

export function GeneralReport() {
  const { generalReport, goals, entries, loading } = useContext(HomeContext);

  const totalGeneralReport = generalReport.reduce(
    (acc, value) => Number(acc) + Number(value.balance),
    0
  );
  return (
    <>
      {!loading.goals &&
      (goals.length === 0 || entries.length === 0 || totalGeneralReport === 0) ? (
        <></>
      ) : (
        <S.Container>
          {loading.generalReport ? (
            <Loading />
          ) : (
            <Widget title="Relatório">
              <S.Content>
                <S.BackGroundBar>
                  {generalReport.map((report) => (
                    <Tippy
                      key={report.id}
                      animation={false}
                      zIndex={1}
                      content={
                        <S.ToolTip>
                          <Title color={report.color} title={report.name} />
                          <span>
                            R$<strong>{report.balance}</strong>
                          </span>
                        </S.ToolTip>
                      }
                    >
                      <S.BarContent sizeWith={report.percentage} color={report.color}>
                        <S.Bar color={report.color} sizeWith={report.percentage}>
                          {Number(report.percentage) > 3 && <span>{report.percentage}%</span>}
                        </S.Bar>
                      </S.BarContent>
                    </Tippy>
                  ))}
                </S.BackGroundBar>

                <S.Legend>
                  {generalReport.map((report) => (
                    <Title color={report.color} title={report.name} key={report.id} />
                  ))}
                </S.Legend>
              </S.Content>
            </Widget>
          )}
        </S.Container>
      )}
    </>
  );
}
