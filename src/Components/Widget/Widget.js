import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import jobsReducer from "../../redux/jobsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlog, getAllCategory, getAllJobs } from "../../redux/apiCalls";
import "./widget.css";
const Widget = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  //get all jobs
  const jobs = useSelector((state) => state.jobs.jobs);
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);

  //get all category
  const categoryData = useSelector((state) => state.category.categorys);
  useEffect(() => {
    setLoading(true);
    getAllCategory(dispatch);
    setLoading(false);
  }, [dispatch]);

  //get all blogs
  const blogs = useSelector((state) => state.blog.blogs);
  useEffect(() => {
    setLoading(true);
    getAllBlog(dispatch);
    setLoading(false);
  }, [dispatch]);
  return (
    <div>
      <div className="widget">
        <div className="row">
          <div className="leftWidge">
            {/* <i className="fa-solid fa-briefcase"></i> */}
            <h5>Total Jobs</h5>
            <p>{jobs.length}</p>
            <div className="seeAlluser">
              <Link className="link" to="/jobs">
                view all jobs
              </Link>
            </div>
          </div>
          {/* middle  */}
          {/* category  */}
          <div className="middletWidget">
            {/* <i className="fa-solid fa-shapes"></i> */}
            <h5>Total Category</h5>
            <p>{categoryData.length}</p>
            <div className="seeAlluser">
              <Link className="link" to="/category">
                view all category
              </Link>
            </div>
          </div>
          {/* right  */}
          {/* blog  */}
          <div className="rightWidget">
            {/* <i className="fa-solid fa-pen"></i> */}
            <h5>Total BLogs</h5>
            <p>{blogs.length}</p>
            <div className="seeAlluser">
              <Link className="link" to="/blog">
                view all blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Widget;
