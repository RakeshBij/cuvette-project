import React from "react";
import graph from "../../assets/graph.svg";
import lineChart from "../../assets/lineChart.svg";

const ComparisonGraph = () => {
  return (
    <span className="basic-border p-30 m-tb-15 m-r-30 w-700 f-16 bold primary-color letter-space-secondary">
      <div className="quick-stats-head">Comparison Graph</div>
      <div className="flex gap-15">
        <div className="comparison-graph-text">
          <div className="f-14 letter-space-tertiary secondary-color normal">
            <span className="bold">You scored 37% percentile </span>
            which is lower than the <br /> average percentile 72% of all the
            engineers who took this assessment
          </div>
        </div>
        <div className="flex justify-end v-center">
          <img src={graph} alt="Correct answers" />
        </div>
      </div>
      <img src={lineChart} alt="line chart" />
    </span>
  );
};

export default ComparisonGraph;
