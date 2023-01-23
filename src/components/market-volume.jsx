import { useState } from "react";
import BarChart from "./charts/bar-chart";
import * as color from "../common/constants";
import "./style.css";
const MarketVolume = () => {
  const [activeItem, setActiveItem] = useState(null);
  const items = [
    { id: 1, name: "name 1" },
    { id: 2, name: "name 2" },
    { id: 3, name: "name 3" },
    { id: 4, name: "name 4" },
    { id: 5, name: "name 5" },
    { id: 6, name: "name 6" },
    { id: 7, name: "name 7" },
  ];

  return (
    <div className="slider-wrapper m-3 p-3 d-flex flex-column justify-content-end align-items-center">
      <BarChart />
      <div className="d-flex justify-content-center align-items-end  mt-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="slider-pagination m-1"
            onClick={() => handleClick(item)}
            style={{
              backgroundColor:
                activeItem !== null && activeItem.id == item.id
                  ? color.COLOR_GREEN
                  : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
  function handleClick(item) {
    setActiveItem(item);
  }
};

export default MarketVolume;
