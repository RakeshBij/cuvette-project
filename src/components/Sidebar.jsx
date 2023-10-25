import React from "react";
import medal from "../assets/dash/medal.svg";
import page from "../assets/dash/page.svg";
import stats from "../assets/dash/stats.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col gap-8">
        <div className="flex v-center gap-15 f-16">
          <img src={stats} alt="dashboard" />
          <div>Dashboard</div>
        </div>
        <div className="flex v-center gap-15 f-16 selected">
          <img src={medal} alt="skill test" />
          <div>Skill Test</div>
        </div>
        <div className="flex v-center gap-15 f-16">
          <img src={page} alt="internships" />
          <div>Internships</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
