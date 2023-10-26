import React, { useContext } from "react";
import trophy from "../../assets/quickStats/trophy.svg";
import tick from "../../assets/quickStats/tick.svg";
import note from "../../assets/quickStats/note.svg";
import { DataContext } from "../../store/data";

const QuickStats = () => {
  const { datas } = useContext(DataContext);
  // const rankNum = datas.rank;
  const num = datas.rank;
  const options = {
    maximumFractionDigits: 2,
  };
  const formattedNumber = Intl.NumberFormat("en-US", options).format(num);
  console.log(formattedNumber);

  return (
    <span className="basic-border p-30 m-tb-15 m-r-30 quick-stats-parent">
      <div className="f-16 primary-color bold letter-space-secondary quick-stats-head">
        Quick Statistics
      </div>
      <div className="flex h-end">
        <div className="flex gap-15 right-border">
          <div className="quick-stats-img-cont">
            <img
              src={trophy}
              alt="Rank"
              className="flex h-center v-center quick-stats-img"
            />
          </div>
          <div className="flex flex-col">
            <div className="f-22 bold letter-space-primary primary-color">
              {formattedNumber}
            </div>
            <div className="f-12 tertiary-color letter-space-four">
              YOUR RANK
            </div>
          </div>
        </div>

        <div className="flex gap-15 right-border m-l-75">
          <div className="flex justify-end v-center quick-stats-img-cont">
            <img src={note} alt="Pecentiels" className="quick-stats-img" />
          </div>
          <div className="flex flex-col">
            <div className="f-22 bold letter-space-primary primary-color">
              {datas.percentile}%
            </div>
            <div className="f-12 tertiary-color letter-space-four">
              PERCENTILE
            </div>
          </div>
        </div>

        <div className="flex gap-15 m-l-75">
          <div className="flex justify-end v-center quick-stats-img-cont">
            <img src={tick} alt="Correct answers" className="quick-stats-img" />
          </div>
          <div className="flex flex-col">
            <div className="f-22 bold letter-space-primary primary-color">
              {datas.currentScore <= 9
                ? `0${datas.currentScore}`
                : datas.currentScore}{" "}
              / 15
            </div>
            <div className="f-12 tertiary-color letter-space-four">
              CORRECT ANSWERS
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default QuickStats;
