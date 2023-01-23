import "./style.css";
const Indexes = ({ filterHourlyPrice }) => {
  /**
   * Returns the key for filtering the data of bar chart
   * @param {*Number} index
   */
  function handleClick(index) {
    filterHourlyPrice(index);
  }

  return (
    <div className="indexes-container m-3 p-3 ">
      <div className="fw-bold">Indexes</div>
      <div className="row mt-2">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ul className="chart-label-list">
            <li onClick={() => handleClick(0)}>Higher</li>
            <li onClick={() => handleClick(1)}>Average</li>
            <li onClick={() => handleClick(2)}>Lower</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center mb-4">
          <div className="max-text mb-4">Maximum range: </div>
          <div className="max-text">Time 1 to Time 2 </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center mb-4">
          <div className="min-text mb-4">Minimum range: </div>
          <div className="min-text">Time 1 to Time 2 </div>
        </div>
      </div>
    </div>
  );
};
export default Indexes;
