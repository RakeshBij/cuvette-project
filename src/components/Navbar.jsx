import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profiePic.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-end v-center navbar">
        <img src={logo} alt="cuvette" />
        <button className="navbar-btn basic-border bold f-16">
          <div className="flex v-center gap-8">
            <img src={profile} alt="profile pic" />
            <span>Siddhart Jain</span>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
