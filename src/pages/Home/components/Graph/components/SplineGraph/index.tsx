import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext } from "react";
import { defaultTheme } from "../../../../../../styles/themes/default";
import { ThemeContext } from "../../../../../../styles/themes/ThemeContext";
import { HomeContext } from "../../../../context";
import * as S from "./styles";
export function SplineGraph() {
  const { theme } = useContext(ThemeContext);
  const { graphDetails, selectedGoal } = useContext(HomeContext);

  const month = graphDetails.map((detail) => {
    const generateDate = format(new Date(detail.date), "LLLL", { locale: ptBr });
    const date = generateDate.charAt(0).toUpperCase() + generateDate.substring(1);
    return date;
  });

  const values = graphDetails.map((detail) => {
    return {
      y: Number(detail.total.toFixed(2)),
      month: Number(detail.thisMonth.toFixed(2)),
    };
  });

  const options = {
    chart: {
      type: "spline",
      backgroundColor: defaultTheme[theme]["background-light"],
      plotBorderColor: "0",
      height: 258,
    },

    colorAxis: {
      gridLineColor: "0",
    },

    plotOptions: {
      spline: {},
    },

    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    tooltip: {
      backgroundColor: defaultTheme[theme]["background-light"],
      borderRadius: 16,
      borderColor: defaultTheme[theme].background,
      followPointer: false,
      shape: "square",
      padding: 16,
      style: {
        color: "#F5F5F5",
      },
      useHTML: true,
      headerFormat: "<div></div>",
      pointFormat:
        '<div class="tooltip"><div class="tooltipContainer">' +
        '<div style="border:4px solid {point.color}" class="bullet"></div><span>{series.name}</span>' +
        "</div>" +
        `<span class="tooltipPoint">Valor Total: R$<strong>{point.y}</strong></span>` +
        `<span class="tooltipPoint">Valor deste mês: R$<strong>{point.month}</strong></span>`,
      footerFormat: '<div class="tooltip"><span class="tooltipFooter">{point.key}</span></div>',
    },

    legend: {
      enabled: false,
    },

    xAxis: {
      categories: month,
      labels: {
        x: -8,
        style: {
          font: "1.4rem Montserrat, sans-serif",
        },
      },
      plotBands: [
        {
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
            stops: [
              [0, defaultTheme[theme].primary],
              [1, defaultTheme[theme].primary0],
            ],
          },
          from: 2.5,
          to: 3.5,
        },
      ],
      gridLineColor: "#ccc",
      pointStart: 0,
      pointInterval: 0,
      tickInterval: 1,
      type: "datetime",
    },

    yAxis: {
      title: "",
      gridLineColor: "0",
      visible: false,
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: selectedGoal ? selectedGoal.name : "Entrada",
        data: values,
        marker: {
          symbol:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMiIgZmlsbD0iIzAwOTZDQyIvPgo8L3N2Zz4K)",
        },
        zoneAxis: "x",
        zones: [
          {
            value: 3.01,
            color: defaultTheme[theme].primary,
          },
          {
            dashStyle: "dash",
            color: "#E0E0E0",
          },
        ],
      },
    ],
  };

  return (
    <S.Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </S.Container>
  );
}
