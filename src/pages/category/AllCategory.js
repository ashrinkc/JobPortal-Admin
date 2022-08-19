import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllCategory } from "../../redux/apiCalls";
import { DataGrid } from "@mui/x-data-grid";
import "./AllCategory.css";
import DeleteAlert from "../../Components/DeleteAlert/DeleteAlert";
const AllCategory = () => {
  const category = "category";
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.categorys);
  //Open Close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [isLoading, setLoading] = useState(true);
  //get all jobs
  useEffect(() => {
    setLoading(true);
    getAllCategory(dispatch);
    setLoading(false);
  }, [dispatch]);

  const columns = [
    // user name
    { field: "fullName", headerName: "Name", width: 200 },

    //user address
    { field: "address", headerName: "Address", width: 200 },

    //user jobTitle
    { field: "jobTitle", headerName: "Job", width: 200 },

    { field: "contact", headerName: "Contact no.", width: 200 },

    { field: "email", headerName: "Email", width: 200 },

    { field: "message", headerName: "Message ", width: 200 },

    { field: "createdAt", headerName: "Created Data", width: 200 },

    //action
    {
      field: "action",
      headerName: " Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/* delete user data button  */}
            <span>
              <button
                onClick={() => {
                  setShowDeleteAlert(!showDeleteAlert) ||
                    setShowDeleteAlert(params.row._id);
                }}
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
    <div>
      <div className="category">
        <Sidebar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="categoryContainer">
            <div className="categoryTopBar">
              <h3>All Users</h3>
              {/* create job button  */}
              {/* <div className="createCategoryBtn">
                <NavLink className="link" to="/create_cat">
                  <button>Add Category</button>
                </NavLink>
              </div> */}
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div
                className="tableContainer"
                style={{ height: 520, width: "96%" }}
              >
                {/* show popoup whwn delete button is clicked */}
                {showDeleteAlert && (
                  <DeleteAlert
                    setShowDeleteAlert={setShowDeleteAlert}
                    id={showDeleteAlert}
                    props={category}
                  />
                )}
                <DataGrid
                  rows={categoryData}
                  columns={columns}
                  rowsPerPageOptions={[8]}
                  disableSelectionOnClick
                  getRowId={(r) => r._id}
                  checkboxSelection
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
