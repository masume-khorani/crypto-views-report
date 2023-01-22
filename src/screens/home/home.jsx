import React from "react";
import Indexes from "../../components/charts/indexes";
import MarketVolume from "../../components/charts/market-volume";
import Price from "../../components/charts/price";
import "./style.css";
class Home extends React.Component {
  render() {
    return (
      <div className="home-container container-fluid d-flex flex-column">
        <div className="d-flex flex-row">
          <Price />
          <MarketVolume />
        </div>
        <Indexes />
      </div>
    );
  }
}
export default Home;
