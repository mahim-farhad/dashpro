import React from "react";

import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

const chartData = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      label: "",
      data: [10, 20, 30, 40, 50, 60],
      borderColor: "transparent",
      backgroundColor: "#0165E1",
      barThickness: 15,
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
    {
      label: "",
      data: [20, 30, 40, 60, 50, 40],
      borderColor: "transparent",
      backgroundColor: "#1dbf73",
      barThickness: 15,
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
    {
      label: "",
      data: [20, 30, 40, 60, 50, 40],
      borderColor: "transparent",
      backgroundColor: "#125688",
      barThickness: 15,
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
    {
      label: "",
      data: [20, 30, 40, 60, 50, 40],
      borderColor: "transparent",
      backgroundColor: "#ea4c89",
      barThickness: 15,
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

const BarChart = () => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
              borderDash: [5],
              lineWidth: 2,
            },

            ticks: {
              color: "gray",
              padding: 16,
            },
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
            max: 100,
          },
        },

        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};

export default BarChart;
