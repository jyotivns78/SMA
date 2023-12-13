import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ClicksByAdGroup = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Views",
        data: [5000, 5200, 5500, 5800, 6000, 6200, 6400]
      },
      {
        name: "Likes",
        data: [3000, 3200, 3400, 3700, 3900, 4100, 4300]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        },
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: '.',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: ''
        }
      },
      yaxis: {
        title: {
          text: ''
        },
        categories: ['0', '2000', '4000', '6000', '8000'],
       
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
  });

  return (
    <>
      <div className='by_country_div'>
        <h2>Clicks By Ad Group</h2>
        <div id="chart">
          <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
      </div>
    </>
  );
};

export default ClicksByAdGroup;
