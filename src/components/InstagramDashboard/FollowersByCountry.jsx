import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../../assets/css/FacebookDashboard.css';

const FollowersByCountry = () => {
  const [chartData, setChartData] = useState({
    series: [14, 23, 21, 17, 15],
    options: {
      chart: {
        type: 'polarArea',
      },
      labels: ['India', 'USA', 'Brazil', 'UK', 'Others'],
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  return (
    <div className='by_country_div'>
      <h2>Followers By Country</h2>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="polarArea" />
      </div>
    </div>
  );
};

export default FollowersByCountry;
