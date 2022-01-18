import React from "react";
import ReactDOM from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ repo }) => {
  const chartConfig = {
    type: "pie3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        decimals: "0",
        pieRadius: "50%",
        theme: "fusion",
      },
      data: repo,
    },
  };
  return <ReactFC {...chartConfig} />;
};

export default Pie3D;
