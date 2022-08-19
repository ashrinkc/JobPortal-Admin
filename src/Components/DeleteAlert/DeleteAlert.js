import React from "react";
import { useDispatch } from "react-redux";
import { deleteBlogs, deleteCategory, deleteJobs } from "../../redux/apiCalls";

const DeleteAlert = ({ setShowDeleteAlert, props }) => {
  const dispatch = useDispatch();
  //delete jobs
  const handleDelete = (id) => {
    if (props === "job") {
      dispatch(deleteJobs(id, dispatch));
    } else if (props === "blog") {
      dispatch(deleteBlogs(id, dispatch));
    } else if (props === "category") {
      dispatch(deleteCategory(id, dispatch));
    } else {
      alert("unable to delete");
    }
  };

  return (
    <div>
      <div className="deleteAlertContainer">
        <span className="areYouSure">
          {`Are you syre you want to delete ${props} `}
        </span>
        <div className="dacButton">
          <button
            className="dacYes"
            onClick={() => setShowDeleteAlert(false || handleDelete)}
          >
            Yes
          </button>
          <button className="dacYes" onClick={() => setShowDeleteAlert(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
