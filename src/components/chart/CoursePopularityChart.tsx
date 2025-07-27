import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["수학", "영어", "과학", "역사", "프론트엔드"],
  datasets: [
    {
      label: "등록된 학생들",
      data: [300, 250, 180, 220, 400],
      backgroundColor: "#34d399",
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

const CoursePopularityChart = () => {
  return <Bar data={data} options={options} />;
};

export default React.memo(CoursePopularityChart);
