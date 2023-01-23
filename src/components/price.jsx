import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import * as constant from "../common/constants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Price = ({ data, filterIndex }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    let labels = [];
    let highData = [];
    let lowData = [];
    let averageDate = [];
    data.map((item) => {
      labels.push(item.time);
      highData.push(item.high);
      lowData.push(item.low);
      averageDate.push(item.open);
    });
    let datasets = [
      {
        label: "Dataset 1",
        data: highData,
        backgroundColor: constant.COLOR_GREEN,
      },
      {
        label: "Dataset 2",
        data: averageDate,
        backgroundColor: constant.COLOR_YELLOW,
      },
      {
        label: "Dataset 3",
        data: lowData,
        backgroundColor: constant.COLOR_RED,
      },
    ];

    if (filterIndex !== null) {
      datasets = [datasets[filterIndex]];
    }
    setChartData({
      labels,
      datasets,
    });
  }, [data, filterIndex]);

  /**
   * final view returned by this component.
   */
  return (
    <div className="chart-wrapper m-3 p-3">
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={chartData}
      />
    </div>
  );
};

export default Price;
