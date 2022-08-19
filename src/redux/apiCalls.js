import {
  createBlogFailure,
  createBlogStart,
  createBlogSuccess,
  deleteBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  getBlogsFailure,
  getBlogsStart,
  getBlogsSuccess,
  updateBlogsFailure,
  updateBlogsStart,
  updateBlogsSuccess,
} from "./blogReducer";
import {
  createCategoryFailure,
  createCategoryStart,
  createCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  getCategorysFailure,
  getCategorysStart,
  getCategorysSuccess,
  updateCategorysFailure,
  updateCategorysStart,
  updateCategorysSuccess,
} from "./categoryReducer";
import {
  createJobFailure,
  createJobStart,
  createJobSuccess,
  deleteJobFailure,
  deleteJobStart,
  deleteJobSuccess,
  getJobsFailure,
  getJobsStart,
  getJobsSuccess,
  updateJobsFailure,
  updateJobsStart,
  updateJobsSuccess,
} from "./jobsReducer";
import {
  loginfailure,
  loginStart,
  loginSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userReducer";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
//success toastify
const tostifySuccess = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  progress: undefined,
};

// failure toastify
const toastifyFailure = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

//login user
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    // const res
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      user
    );

    dispatch(loginSuccess(user.email));
    toast.success("Login success!", tostifySuccess);
    // auto log out when token is expired
    setTimeout(() => {
      localStorage.clear();
      window.location.reload("/");
      toast.error(" Token Expired! Login Again", toastifyFailure);
    }, 900000);
  } catch (error) {
    dispatch(loginfailure());
    console.log(error);
    toast.error("Invalid credintials", toastifyFailure);
    // <ToastContainer />;
  }
};

//get admin info
export const getAdmin = async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/user/user");
    console.log(res);
  } catch (err) {
    console.log("unable to get admin details" + err);
  }
};

//update user
export const updateProfile = async (id, data, dispatch) => {
  dispatch(updateUserStart());
  try {
    await axios.put(`/user/${id}`, data);
    dispatch(updateUserSuccess(id, data));
    toast.success("Profile successfully updated", tostifySuccess);
  } catch (error) {
    console.log("unable to update user" + error);
    dispatch(updateUserFailure());
  }
};

//get all jobs
export const getAllJobs = async (dispatch) => {
  dispatch(getJobsStart());
  try {
    const res = await axios.get("http://localhost:5000/api/v1/jobs/allJobs");
    dispatch(getJobsSuccess(res.data));
  } catch (error) {
    dispatch(getJobsFailure());
    console.log(error);
  }
};

//create jobs
export const createJobs = async (jobs, dispatch) => {
  dispatch(createJobStart());
  try {
    await axios.post("http://localhost:5000/api/v1/jobs", jobs);
    dispatch(createJobSuccess(jobs.data));
    toast.success("Job successfully created", tostifySuccess);
  } catch (error) {
    console.log("unable to create jobs" + error);
    dispatch(createJobFailure());
    console.log(error);
    toast.error("Something went wrong please try again", toastifyFailure);
  }
};

//delete jobs
export const deleteJobs = async (id, dispatch) => {
  dispatch(deleteJobStart());
  try {
    await axios.delete(`http://localhost:5000/api/v1/jobs/${id}`);
    dispatch(deleteJobSuccess(id));
  } catch (error) {
    console.log("unable to delete jobs" + error);
    dispatch(deleteJobFailure());
    toast.error("Something went wrong, please try again", toastifyFailure);
  }
};

//update jobs
export const updateJobs = async (id, jobs, dispatch) => {
  dispatch(updateJobsStart());
  try {
    await axios.put(`http://localhost:5000/api/v1/jobs/${id}`, jobs);
    dispatch(updateJobsSuccess(id, jobs));
    toast.success("Job successfully updated", tostifySuccess);
  } catch (error) {
    console.log("unable to update job" + error);
    dispatch(updateJobsFailure());
    toast.error("Something went wrong. please try again", toastifyFailure);
  }
};

//get all category
export const getAllCategory = async (dispatch) => {
  dispatch(getCategorysStart());
  try {
    const res = await axios.get("http://localhost:5000/api/v1/contact");
    dispatch(getCategorysSuccess(res.data.data));
  } catch (error) {
    dispatch(getCategorysFailure());
    console.log(error);
  }
};

// create category
export const createCategory = async (blogData, dispatch) => {
  dispatch(createCategoryStart());
  try {
    await axios.post(`/category`, blogData);
    dispatch(createCategorySuccess(blogData.data));
    toast.success("Category successfully created", tostifySuccess);
  } catch (error) {
    console.log("unablr to create blog" + error);
    dispatch(createCategoryFailure());
    toast.error("Something went wrong please try again", toastifyFailure);
  }
};

//update category
export const updateCategory = async (id, cat, dispatch) => {
  dispatch(updateCategorysStart());
  try {
    await axios.put(`/category/${id}`, cat);
    dispatch(updateCategorysSuccess(id, cat));
    toast.success("Category successfully updated", tostifySuccess);
  } catch (error) {
    console.log("unable to update category" + error);
    dispatch(updateCategorysFailure());
    toast.error("Something went wrong please try again", toastifyFailure);
  }
};

//delete category
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete(`http://localhost:5000/api/v1/contact/${id}`);
    dispatch(deleteCategorySuccess(id));
    toast.success(" Category successfully deleted", tostifySuccess);
  } catch (error) {
    console.log("unable to delete category" + error);
    dispatch(deleteCategoryFailure());
    toast.error("Something went wrong please try again", toastifyFailure);
  }
};

//blog section
//get all blog
export const getAllBlog = async (dispatch) => {
  dispatch(getBlogsStart());
  try {
    const res = await axios.get("http://localhost:5000/api/v1/blog/allBlog");
    console.log(res.data);
    dispatch(getBlogsSuccess(res.data));
  } catch (error) {
    dispatch(getBlogsFailure());
    console.log(error);
  }
};

//create blog
export const createBlog = async (blogData, dispatch) => {
  dispatch(createBlogStart());
  try {
    console.log(blogData);
    // await axios.get(`/blog`, blogData);
    await axios.post("http://localhost:5000/api/v1/blog", blogData);
    // dispatch(createBlogSuccess(blogData.data));
    toast.success("Blog successfully created", tostifySuccess);
  } catch (error) {
    console.log("Unable to create blog" + error);
    dispatch(createBlogFailure());
    console.log(error);
    toast.error("Something went wrong! please try again", toastifyFailure);
  }
};

//update blogs
export const updateBlog = async (id, blogs, dispatch) => {
  dispatch(updateBlogsStart());
  console.log(blogs);
  try {
    await axios.put(`http://localhost:5000/api/v1/blog/${id}`, blogs);
    console.log(blogs);
    dispatch(updateBlogsSuccess(id, blogs));
    toast.success("Blog updated successfully", tostifySuccess);
  } catch (error) {
    console.log("unable to update blog" + error);
    dispatch(updateBlogsFailure());
    toast.error("Something went wrong", toastifyFailure);
  }
};

//delete blogs
export const deleteBlogs = async (id, dispatch) => {
  dispatch(deleteBlogStart());
  try {
    await axios.delete(`http://localhost:5000/api/v1/blog/${id}`);
    dispatch(deleteBlogSuccess(id));
  } catch (err) {
    console.log("unable to delete blog" + err);
    dispatch(deleteBlogFailure());
    toast.error("Something went wrong", toastifyFailure);
  }
};
