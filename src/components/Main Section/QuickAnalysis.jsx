import React from "react";
import pieChart from "../../assets/pieChart.svg";

const QuickAnalysis = () => {
  return (
    <span className="basic-border p-30 m-tb-15 m-r-30">
      <div className="quick-stats-head primary-color letter-space-secondary bold flex h-end">
        <div>Question Analysis</div>
        <div className="light-blue">07 / 15</div>
      </div>
      <div className="comparison-graph-text">
        <div className="f-14 letter-space-tertiary secondary-color normal">
          <span className="bold">
            You scored 7 question correct out of 15.{" "}
          </span>
          However it still needs some improvements
        </div>
      </div>
      <div className="flex h-center v-center">
        <img src={pieChart} alt="Pie chart" className="pie-chart" />
      </div>
    </span>
  );
};

export default QuickAnalysis;
