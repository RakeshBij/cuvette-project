import React from "react";
import Hypertext from "./Main Section/Hypertext";
import QuickStats from "./Main Section/QuickStats";
import ComparisonGraph from "./Main Section/ComparisonGraph";
import SylabuswiseAnalysis from "./Main Section/SylabuswiseAnalysis";
import QuickAnalysis from "./Main Section/QuickAnalysis";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-head f-12">Skill Test</div>
        <div className="flex main-body">
          <div className="flex flex-col">
            <Hypertext />
            <QuickStats />
            <ComparisonGraph />
          </div>
          <div className="flex flex-col">
            <SylabuswiseAnalysis />
            <QuickAnalysis />
          </div>
        </div>
        {/* <span className="basic-border p-30 m-tb-15 m-r-30">Hello</span>
        <span className="basic-border p-30 m-tb-15 m-r-30">Hello</span>
        <span className="basic-border p-30 m-tb-15 m-r-30">Hello</span>
        <span className="basic-border p-30 m-tb-15 m-r-30">Hello</span> */}
      </div>
    </>
  );
};

export default Main;
