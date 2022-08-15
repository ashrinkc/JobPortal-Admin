import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { updateCategory } from "../../redux/apiCalls";
import "./EditCategory.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const EditCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get user by id
  const [isLoading, setLoading] = useState(true);

  const [didMount, setDidMount] = useState(false);
  const [catData, seCatData] = useState({});
  useEffect(() => {
    setDidMount(true);
    setLoading(true);

    const getDataById = async () => {
      try {
        const res = await axios.get("/category/find/" + path);
        seCatData(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getDataById();
    return () => setDidMount(false);
  }, [path]);

  // update category
  const dispatch = useDispatch();
  const [title, setTitle] = useState(catData.title);
  const [date, setDate] = useState(catData.date);

  const handelUpdate = (e) => {
    const cat = { title, date };
    updateCategory(path, cat, dispatch);
    navigate("/category");
  };

  return (
    <div className="editCategory">
      <Sidebar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="editCategoryContainer">
            <div className="row">
              <div className="col-md-12">
                <div className="editCategoryTitle text-center">
                  <h3>Edit Category</h3>
                </div>

                <form className="addJobForm">
                  <div className="row">
                    {/* left side */}
                    <div className="col-md-6">
                      <div className="editCategoryField">
                        <label>Category</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={catData.title}
                          name="title"
                          autoComplete="off"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      {/* publish date */}
                      <div className="editCategoryField">
                        <label>Publish Date</label>
                        <br />
                        <input
                          type="date"
                          defaultValue={catData.date}
                          name="year"
                          autoComplete="off"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* create btn */}
                  <div className="editCategoryButton">
                    <button onClick={handelUpdate}>update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditCategory;
