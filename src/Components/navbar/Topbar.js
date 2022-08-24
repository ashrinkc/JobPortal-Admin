import React, { useEffect, useState } from "react";
import "./topbar.css";
// import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import multiEmp from "../../images/multiEmp.png";
const Topbar = () => {
  // const user = useSelector((state) => state.user.currentUser);

  // const userId = user.others._id;

  // // get user data from user id
  // const [didMount, setDidMount] = useState(false);
  // const [userData, setUserData] = useState({});
  // useEffect(() => {
  //   const getUserData = async () => {
  //     setDidMount(true);

  //     try {
  //       const res = await axios.get("/user/find/" + userId);
  //       setUserData(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserData();
  //   return () => setDidMount(false);
  // }, [userId]);

  return (
    <>
      <div className="topbar">
        <div className="navbar">
          <div className="left">
            <Link className="link" to="/">
              <img src={multiEmp} alt="logo_img" />
            </Link>
          </div>
          {/* right side */}
          <div className="right">
            <div>
              <Link className="link dropdown-item" to="/profile">
                {/* <i className="fa-solid fa-user"></i> */}
                <span>Profile</span>
              </Link>
            </div>
            {/* <div>
              <Link className=" link dropdown-item" to="/setting/core">
                
                <span>Setting</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
