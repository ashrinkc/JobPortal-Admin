import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Allproduct.css";
import { DataGrid } from "@mui/x-data-grid";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";

import { getAllBlog } from "../../redux/apiCalls";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Loader from "../../Components/Loader/Loader";

const Allproduct = () => {
  const blog = "blog";
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  // get all blogs
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllBlog(dispatch);
    }, 1000);
    setLoading(false);
  }, [dispatch]);

  // colums material ui table
  const columns = [
    // jobs photo
    {
      field: "img",
      headerName: "Photo",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {/* user image */}
            <div className="userImg">
              <img src={params.row.img} alt="job_img" />
            </div>
          </>
        );
      },
    },
    // jobs title
    { field: "title", headerName: "Title", width: 200 },

    // author
    { field: "author", headerName: "Author", width: 200 },

    // job create date
    {
      field: "createdAt",
      headerName: "Created date",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            {/* user image */}
            <div className="userImg">
              <span>{new Date(params.row.createdAt).toDateString()}</span>
            </div>
          </>
        );
      },
    },

    // job action
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/* view data button*/}
            <NavLink to={`/edit_blog/${params.row?._id}`}>
              <button className="button_Edit">edit</button>
            </NavLink>
            {/* delete  user data button*/}
            <span>
              <button
                onClick={() =>
                  setShowDeleteAlert(!showDeleteAlert) ||
                  setShowDeleteAlert(params.row._id)
                }
                className="button_delete"
              >
                delete
              </button>
            </span>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="allBlog">
        <Sidebar />

        <div className="allBlogContainer">
          {/* top bar create button */}
          <div className="allContainerWrapper">
            <div className="blogTitle ">
              <h3>All Blogs</h3>
            </div>
            <div className="createBlogBtn">
              <Link to="/newblog">
                <button>Add Blogs</button>
              </Link>
            </div>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div
              className="tableContainer"
              style={{ height: 520, width: "96%" }}
            >
              {/* show popoup whwn delete button is clicked */}
              {/* {showDeleteAlert && (
                <DeleteAlert
                  setShowDeleteAlert={setShowDeleteAlert}
                  id={showDeleteAlert}
                  props={blog}
                />
              )} */}
              <DataGrid
                rows={blogs}
                columns={columns}
                rowsPerPageOptions={[8]}
                disableSelectionOnClick
                getRowId={(r) => r._id}
                checkboxSelection
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Allproduct;
