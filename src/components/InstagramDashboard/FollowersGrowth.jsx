import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const FollowersGrowth = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
     
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={200} />
    </div>
  );
};

export default FollowersGrowth;
