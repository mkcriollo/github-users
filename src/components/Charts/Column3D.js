import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme);

const Column3DChart = ({ repo }) => {
  // const {forks,forks_count, language, fork} = repo
  const chartConfig = {
    type: "column2d",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked", //Set the chart caption
        subCaption: "", //Set the chart subcaption
        xAxisName: "Forks", //Set the x-axis name
        yAxisName: "Repos", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      data: repo,
    },
  };

  return <ReactFC {...chartConfig} />;
};

export default Column3DChart;
