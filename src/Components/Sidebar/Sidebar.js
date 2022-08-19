import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload("/login");
  };

  return (
    <>
      <div className=" sidebar">
        <div className="sidebar-box">
          <div className="sidebartitle">MAIN</div>
          <div className="sidebarList">
            {/* it render to home page folder in   */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active link" : "")}
            >
              <li className="sidebarItem mt-1">
                <i className="fa-solid fa-table-columns"></i>
                <span>Dashboard</span>
              </li>
            </NavLink>
          </div>

          <div className="sidebartitle mt-3">LISTS</div>

          {/* category */}
          <div className="sidebarList">
            {/* users link which render to userlist page */}
            <NavLink className="link" to="/category">
              <li className="sidebarItem mt-1">
                <i className="fa-solid fa-shapes"></i>
                <span>Users</span>
              </li>
            </NavLink>
          </div>
          <div className="sidebarList">
            {/* users link which render to userlist page */}
            <NavLink className="link" to="/jobs">
              <li className="sidebarItem mt-1">
                <i className="fa-solid fa-briefcase"></i>
                <span>Jobs</span>
              </li>
            </NavLink>
          </div>

          <div className="sidebarList ">
            {/* blog page */}
            <NavLink className="link" to="/blog">
              <li className="sidebarItem mt-1">
                <i className="fa-solid fa-pen"></i>
                <span>Blog</span>
              </li>
            </NavLink>
          </div>
          {/* user */}
          <div className="sidebartitle mt-3">USER</div>
          <div className="sidebarList">
            <li className="sidebarItem mt-1" onClick={handleLogout}>
              {/* logout user */}
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </li>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
