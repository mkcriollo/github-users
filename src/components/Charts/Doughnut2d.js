import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ repo }) => {
  const chartConfig = {
    type: "doughnut3d",
    width: "100%",
    height: "400",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        showPercentValues: 0,
        doughnutRadius: "45%",
        theme: "candy",
      },
      data: repo,
    },
  };
  return <ReactFC {...chartConfig} />;
};

export default Doughnut2d;
