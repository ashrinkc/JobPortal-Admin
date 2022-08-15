import React from "react";
import { Formik, Form } from "formik";
import { loginUser } from "../../redux/apiCalls";
import RegisterTextField from "../../Components/RegisterTextField/RegisterTextField";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import "./login.css";
import Topbar from "../../Components/navbar/Topbar";
const Login = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const validate = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required!"),
  });

  const submitUser = () => {
    dispatch(loginUser(dispatch, "jjj"));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          dispatch(loginUser(dispatch, values));
        }}
      >
        <Form>
          <div className="loginPage">
            <div className="loginForm">
              <div className="compantLogo">
                <img
                  src="https://www.logodesign.net/images/nature-logo.png"
                  alt="logo"
                />
              </div>
              <div className="LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox">
                  <label>Email</label>
                  <RegisterTextField label="Email" name="email" type="text" />
                </div>
                <div className="inputBox">
                  <label>Password</label>
                  <RegisterTextField
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="inputBox">
                  <button
                    type="submit"
                    onSubmit={submitUser}
                    disabled={isFetching}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
