import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllCategory } from "../../redux/apiCalls";
import { DataGrid } from "@mui/x-data-grid";
import "./AllCategory.css";
const AllCategory = () => {
  const category = "job category";
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
    // jobs category title
    { field: "title", headerName: "Title", width: 200 },

    //publish date
    { field: "date", headerName: "Publish Date", width: 200 },

    //action
    {
      field: "action",
      headerName: " Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/* view data button  */}
            <NavLink to={`/edit_cat/${params.row._id}`}>
              <button className="categoryEdit_button">edit</button>
            </NavLink>
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
              <h3>All Category</h3>
              {/* create job button  */}
              <div className="createCategoryBtn">
                <NavLink className="link" to="/create_cat">
                  <button>Add Category</button>
                </NavLink>
              </div>
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div
                className="tableContainer"
                style={{ height: 520, width: "96%" }}
              >
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
