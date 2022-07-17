import React from "react";

import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

const chartData = {
  datasets: [
    {
      label: "",
      data: [10, 8, 12],
      backgroundColor: ["#3456ff", "#fb8c00", "#4caf50"],
      spacing: 3,
    },
  ],
};

const PieChart = () => {
  return (
    <Doughnut
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};

export default PieChart;
