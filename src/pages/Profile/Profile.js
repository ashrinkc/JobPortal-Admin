import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { updateProfile } from "../../redux/apiCalls";
import "./Profile.css";
const Profile = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // const userId = user.others._id;

  //get user data from user id
  const [isLoading, setLoading] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   setLoading(false);
  //   const getUserData = async () => {
  //     setDidMount(true);
  //     try {
  //       const res = await axios.get("/user/find" + userId);
  //       setUserData(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserData();
  //   setLoading(false);
  //   return () => setDidMount(false);
  // }, [userId]);

  //update username and email
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);

  // const handleSave = (e) => {
  //   e.preventDefault();
  //   const data = { username, email };
  //   updateProfile(userId, data, dispatch);
  //   window.location.replace("/");
  // };
  return (
    <div>
      <div className="profile">
        <Sidebar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="profileContainer">
            {/* profile top content  */}
            <div className="profileTitle">Profile</div>
            <div className="profileTopbar">
              {/* information icon  */}
              <NavLink
                className={({ isActivate }) =>
                  isActivate ? "activate link" : ""
                }
                to="/profile"
              >
                information
              </NavLink>
              {/* key icon (change password)  */}
              <NavLink
                className={({ isActivate }) =>
                  isActivate ? "activate link" : ""
                }
                to="/password"
              >
                security
              </NavLink>
            </div>
            {/* change email and username input field  */}
            <form action="" className="form">
              {/* username  */}
              <div className="changeUserData">
                <div className="changeUserDataInputField">
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    // defaultValue={userData.username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* email  */}
                <div className="changeUserDataInputField">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    // defaultValue={userData.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* submit button  */}
              <div className="submitbutton">
                <button type="button">
                  {/* onClick={handleSave} */}
                  save changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
