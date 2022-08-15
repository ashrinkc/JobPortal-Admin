import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./changepassword.css";
import { updateProfile } from "../../redux/apiCalls";
import InputField from "../../Components/inputField/InputField";
const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.user.currentUser);
  // const userId = user.others._id;

  // const validate = Yup.object({
  //   password: Yup.string()
  //     .min(6, "Password is too short should be 6 characters minimum")
  //     .required("Password is required"),
  //   cpassword: Yup.string().oneOf(
  //     [Yup.ref("password"), null],
  //     "password does not match!"
  //   ),
  // });

  return (
    <div>
      <div className="profile">
        <Sidebar />
        <div className="profileContainer">
          {/* profile top content  */}
          <div className="profileTitle">Profile</div>
          <div className="profileTopbar">
            {/* information icon  */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/profile"
            >
              information
            </NavLink>
            {/* key icon password icon  */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/password"
            >
              <i className="fa-solid fa-lock"></i>
              security
            </NavLink>
          </div>
          <Formik
            initialValues={{
              password: "",
              cpassword: "",
            }}
            // validationSchema={validate}
            onSubmit={(values) => {
              // updateProfile(userId, values, dispatch);
              navigate("/profile");
            }}
          >
            {/* change email and username input field  */}
            <Form action="" className="changeUserDataPassword">
              {/* new password  */}
              <div className="changeUserDataPasswordField">
                <label>New Password</label>
                <br />
                <InputField label="Password" name="password" type="password" />
              </div>
              {/* confirm password  */}
              <div className="changeUserDataPasswordField">
                <label>Confirm Password</label>
                <br />
                <InputField label="Password" name="cpassword" type="password" />
              </div>
              {/* submit button */}
              <div className="changePasswordButton">
                <button>save changes</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
