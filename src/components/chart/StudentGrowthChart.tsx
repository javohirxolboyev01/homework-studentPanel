import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
  datasets: [
    {
      label: "신규 등록한 학생",
      data: [100, 200, 300, 400, 500, 600, 750],
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f688",
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const StudentGrowthChart = () => {
  return <Line data={data} options={options} />;
};

export default React.memo(StudentGrowthChart);
