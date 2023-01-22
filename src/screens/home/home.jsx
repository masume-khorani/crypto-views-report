import React from "react";
import Indexes from "../../components/charts/indexes";
import MarketVolume from "../../components/charts/market-volume";
import Price from "../../components/charts/price";
import "./style.css";
class Home extends React.Component {
  render() {
    return (
      <div className="home-container ">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <Price />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <MarketVolume />
          </div>
        </div>
        <Indexes />
      </div>
    );
  }
}
export default Home;
