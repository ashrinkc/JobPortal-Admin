import React from "react";
import { NavLink } from "react-router-dom";
import "./CoreWidget.css";
const CoreWidget = () => {
  return (
    <>
      <div className="coreWiget">
        {/* core link */}
        <h3>Modules</h3>
        <div className="coreWigetItem ">
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "")}
            to="/setting/core"
          >
            Core
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CoreWidget;
