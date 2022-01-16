import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ repo }) => {
  const chartConfig = {
    type: "doughnut3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        pieRadius: "45%",
      },
      data: repo,
    },
  };
  return <ReactFC {...chartConfig} />;
};

export default Doughnut2d;
