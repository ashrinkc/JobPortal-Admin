import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllJobs } from "../../redux/apiCalls";
import { DataGrid } from "@mui/x-data-grid";
import "./AllJobs.css";
import DeleteAlert from "../../Components/DeleteAlert/DeleteAlert";

const AllJobs = () => {
  const job = "job";
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  //open close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  // loading component
  const [isLoading, setLoading] = useState(true);

  // get all jobs
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);

  // colums material ui table
  const columns = [
    // jobs title
    { field: "title", headerName: "Title", width: 200 },

    // job category
    { field: "cat", headerName: "Category", width: 200 },

    // job create date
    {
      field: "createdAt",
      headerName: "Created date",
      width: 160,
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
            <NavLink to={`/job/${params.row?._id}`}>
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
    <div className="jobs">
      <Sidebar />
      <div className="jobContainer">
        <div className="JobTopBar">
          <h3>All Jobs</h3>
          {/* create job button  */}
          <div className="createJobBtn">
            <NavLink className="link" to="/createjobs">
              <button>Add Jobs</button>
            </NavLink>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="tableContainer" style={{ height: 520, width: "96%" }}>
            {/* show popoup whwn delete button is clicked */}
            {showDeleteAlert && (
              <DeleteAlert
                setShowDeleteAlert={setShowDeleteAlert}
                id={showDeleteAlert}
                props={job}
              />
            )}
            <DataGrid
              rows={jobs}
              columns={columns}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              checkboxSelection
              getRowId={(r) => r?._id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
