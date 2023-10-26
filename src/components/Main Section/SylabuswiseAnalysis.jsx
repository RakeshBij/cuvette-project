import React from "react";
import blueBar from "../../assets/sylabusBarGraphs/blueGraph.svg";

const SylabuswiseAnalysis = () => {
  return (
    <span className="basic-border p-30 m-tb-15 m-r-30 SylabuswiseAnalysis-parnet">
      <div className="quick-stats-head primary-color letter-space-secondary bold ">
        Syllabus wise Analysis
      </div>
      <div className="flex flex-col h-end gap-15 sylabus-wise-analysis">
        <div>
          <div className="secondary-color f-16 letter-space-secondary sylabus-wise-analysis-score-heading">
            HTML Tools, Forms, History
          </div>
          <div className="flex h-end">
            <div className="bargraph-parent">
              <div className="back-bar back-bar-1"></div>
              <div className="front-bar front-bar-1"></div>
            </div>
            <div className="sylabus-wise-analysis-score-1 sylabus-wise-analysis-scores f-16 bold letter-space-secondary">
              80%
            </div>
          </div>
        </div>
        <div>
          <div className="secondary-color f-16 letter-space-secondary sylabus-wise-analysis-score-heading">
            Tags & References in HTML
          </div>
          <div className="flex h-end">
            <div className="bargraph-parent">
              <div className="back-bar back-bar-2"></div>
              <div className="front-bar front-bar-2"></div>
            </div>
            <div className="sylabus-wise-analysis-score-2 sylabus-wise-analysis-scores f-16 bold letter-space-secondary">
              60%
            </div>
          </div>
        </div>
        <div>
          <div className="secondary-color f-16 letter-space-secondary sylabus-wise-analysis-score-heading">
            Tables & CSS Basics
          </div>
          <div className="flex h-end">
            <div className="bargraph-parent">
              <div className="back-bar back-bar-3"></div>
              <div className="front-bar front-bar-3"></div>
            </div>
            <div className="sylabus-wise-analysis-score-3 sylabus-wise-analysis-scores f-16 bold letter-space-secondary">
              24%
            </div>
          </div>
        </div>
        <div>
          <div className="secondary-color f-16 letter-space-secondary sylabus-wise-analysis-score-heading">
            Tables & CSS Basics
          </div>
          <div className="flex h-end">
            <div className="bargraph-parent">
              <div className="back-bar back-bar-4"></div>
              <div className="front-bar front-bar-4"></div>
            </div>
            <div className="sylabus-wise-analysis-score-4 sylabus-wise-analysis-scores f-16 bold letter-space-secondary">
              96%
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default SylabuswiseAnalysis;
