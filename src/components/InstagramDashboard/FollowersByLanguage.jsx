

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Hindi", 55, "#b87333", "55%"],
    ["English", 30, "silver", "30%"],
    ["Spanish", 5, "gold", "5%"],
    ["French", 2, "color: #e5e4e2", "2%"],
    ["Other", 8, "color: #e5e4e2", "8%"],
  ];
  
  
  
  export const options = {
    title: "Followers By Language",
    titleTextStyle: {
        fontSize: 18, 
      },
    height: 300,
    bar: {
      groupWidth: "95%",
      height: 20, 
    },
    legend: { position: "none" },
    hAxis: {
      ticks: [],
      showTextEvery: 1000,
    },
    annotations: {
      textStyle: {
        fontSize: 12,
        color: "black",
      },
      alwaysOutside: true,
    },
  };
  
  
  
  
  

export function FollowersByLanguage() {
  return (
    
    <Chart
      chartType="BarChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
