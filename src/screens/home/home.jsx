import React from "react";
import Indexes from "../../components/charts/indexes";
import MarketVolume from "../../components/charts/market-volume";
import Price from "../../components/charts/price";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Price />
        <MarketVolume />
        <Indexes />
      </div>
    );
  }
}
export default Home;
