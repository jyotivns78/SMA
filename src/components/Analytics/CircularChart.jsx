import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CircularChart = () => {
  const [chartState, setChartState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} type="donut" />
    </div>
  );
};

export default CircularChart;
