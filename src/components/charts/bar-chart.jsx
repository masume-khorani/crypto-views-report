import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import * as color from "../../common/constants";
import "../style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
const labels = ["time1"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: color.COLOR_GREEN,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="bar-chart-wrapper m-3 p-3">
      <Bar options={options} data={data} />
    </div>
  );
};
export default BarChart;
