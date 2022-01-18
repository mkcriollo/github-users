import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ repo }) => {
  const chartConfig = {
    type: "bar3d",
    width: "600",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        width: "100%",
        height: "400",
        yAxisName: "Repos",
        xAxisName: "Stars",
        theme: "fusion",
      },
      data: repo,
    },
  };
  return <ReactFC {...chartConfig} />;
};

export default Bar3D;
