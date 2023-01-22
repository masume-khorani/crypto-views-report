import "./style.css";
const Indexes = () => {
  return (
    <div className="indexes-container d-flex flex-column m-3 p-3 ">
      <div className="fw-bold">Indexes</div>
      <div className="d-flex flex-row justify-content-between align-items-center mt-2">
        <div>
          <ul className="chart-label-list">
            <li>Higher</li>
            <li>Average</li>
            <li>Lower</li>
          </ul>
        </div>
        <div>
          <div className="max-text mb-4">Maximum range: </div>
          <div className="max-text">Time 1 to Time 2 </div>
        </div>
        <div>
          <div className="min-text mb-4">Minimum range: </div>
          <div className="min-text">Time 1 to Time 2 </div>
        </div>
      </div>
    </div>
  );
};
export default Indexes;
