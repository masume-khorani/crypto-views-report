import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Component } from "react";
import { Bar } from "react-chartjs-2";
import * as constant from "../common/constants";
import "./style.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class MarketVolume extends Component {
  state = {
    activeItem: null,
    activeItemIndex: 0,
    chartData: {
      labels: [],
      datasets: [],
    },
  };

  componentDidMount() {
    this.setState({
      activeItem: this.props.data[0],
      chartData: {
        labels: [this.props.data[0].time],
        datasets: [
          {
            label: "Dataset 1",
            data: [this.props.data[0].volume],
            backgroundColor: constant.COLOR_GREEN,
          },
        ],
      },
    });
  }

  /**
   * this function handles click on pagination's indicators
   * @param {*Array} data
   * @param {*Object} item
   * @param {*Number} index
   */
  handleClick = (data, item, index) => {
    this.renderChart(item);
    this.setState({ activeItem: item }, () => {
      const itemIndex = data.findIndex((s) => {
        return data.indexOf(s) === index;
      });
      this.setState({ activeItemIndex: itemIndex });
    });
  };

  /**
   * this function set data for chart
   * @param {*Object} item
   */
  renderChart = (item) => {
    let labels = [item.time];
    let datasets = [item.volume];
    let data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: datasets,
          backgroundColor: constant.COLOR_GREEN,
        },
      ],
    };
    this.setState({ chartData: data });
  };

  /**
   *
   * @returns market-volum component
   */
  render() {
    const { data } = this.props;
    const { activeItemIndex, chartData } = this.state;
    return (
      <div className="slider-wrapper m-3 p-3 d-flex flex-column justify-content-end align-items-center">
        <Bar
          options={{
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={chartData}
        />
        <div className="d-flex justify-content-center align-items-end  mt-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="slider-pagination m-1"
              onClick={() => this.handleClick(data, item, index)}
              style={{
                backgroundColor:
                  activeItemIndex !== null && activeItemIndex == index
                    ? constant.COLOR_GREEN
                    : "white",
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default MarketVolume;
