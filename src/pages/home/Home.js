import React from "react";
import Topbar from "../../Components/navbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Widget />
      </div>
    </div>
  );
};

export default Home;
