import React from "react";

import { Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

const chartData = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],

  datasets: [
    {
      label: "",
      data: [0, 5, 2, 3, 5, 1],
      fill: false,
      backgroundColor: "transparent",
      pointBackgroundColor: "#3456ff",
      borderColor: "#3456ff",
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        radius: 5,

        scales: {
          x: {
            grid: {
              borderDash: [5],
              lineWidth: 2,
            },

            ticks: {
              color: "gray",
              padding: 16,
            },

            min: 0,
            max: 100,
          },

          y: {
            grid: {
              borderDash: [5],
            },

            ticks: {
              color: "gray",
              padding: 16,
            },

            min: 0,
            max: 10,
          },
        },

        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};

export default LineChart;
