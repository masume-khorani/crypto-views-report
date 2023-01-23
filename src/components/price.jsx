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
import * as color from "../common/constants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
const labels = [
  "time1",
  "time2",
  "time3",
  "time4",
  "time5",
  "time6",
  "time7",
  "time8",
  "time9",
  "time10",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: color.COLOR_GREEN,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: color.COLOR_YELLOW,
    },
    {
      label: "Dataset 3",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: color.COLOR_RED,
    },
  ],
};
const Price = () => {
  return (
    <div className="chart-wrapper m-3 p-3">
      <Bar options={options} data={data} />
    </div>
  );
};
export default Price;
