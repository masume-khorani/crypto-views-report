import React from "react";
import Indexes from "../../components/indexes";
import MarketVolume from "../../components/market-volume";
import Price from "../../components/price";
import Api from "../../api/api";
import "./style.css";

class Home extends React.Component {
  state = {
    hourlyPrice: [],
    hourlyVolume: [],
    loading: true,
  };
  async componentDidMount() {
    const data = await Api.fetchHourlyData();
    this.setState({
      hourlyPrice: data[0].data.Data.Data,
      hourlyVolume: data[1].data.Data,
      filterIndex: null,
      loading: false,
    });
  }

  /**
   * Get the key for filtering the data of bar chart from its child (Indexes component)
   * @param {*Number} filterIndex
   */
  filterHourlyPrice = (filterIndex) => {
    this.setState({ filterIndex });
  };

  render() {
    const { loading, hourlyPrice, hourlyVolume, filterIndex } = this.state;
    return (
      <div className="home-container container">
        {loading ? (
          <div className="spinner-border position-absolute top-50 start-50">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 ">
                <Price data={hourlyPrice} filterIndex={filterIndex} />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <MarketVolume data={hourlyVolume} />
              </div>
            </div>
            <Indexes filterHourlyPrice={this.filterHourlyPrice} />
          </>
        )}
      </div>
    );
  }
}
export default Home;
