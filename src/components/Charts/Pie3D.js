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
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        captionFontBold: "1",
        decimals: "0",
        pieRadius: "50%",
        theme: "fusion",
        width: "100%",
        height: "400",
      },
      data: repo,
    },
  };
  return <ReactFC {...chartConfig} />;
};

export default Pie3D;
