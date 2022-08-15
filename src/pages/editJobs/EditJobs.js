import React, { useEffect, useState } from "react";

import "./editJobs.css";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllJobs, updateJobs } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";

const EditJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //  // category
  const categoryData = useSelector((state) => state.category.categorys);
  // get all jobs
  useEffect(() => {
    setLoading(true);
    getAllCategory(dispatch);
    setLoading(false);
  }, [dispatch]);

  // get all jobs
  useEffect(() => {
    getAllJobs(dispatch);
  }, [dispatch]);

  // get user by id
  const [isLoading, setLoading] = useState(true);
  const [didMount, setDidMount] = useState(false);
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    setLoading(true);
    setDidMount(true);
    const getDataById = async () => {
      try {
        const res = await axios.get("/jobs/find/" + path);
        setJobData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
    setLoading(false);
    return () => setDidMount(false);
  }, [path]);

  // react quill
  const { quill, quillRef } = useQuill();
  const [desc, setDesc] = useState(jobData.desc);

  // react quill is used for description
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setDesc(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  const [title, setTitle] = useState(jobData.title);
  const [cat, setCat] = useState(jobData.cat);
  const [metaTitle, setMetaTitle] = useState(jobData.metaTitle);
  const [metaKey, setMetaKey] = useState(jobData.metaKey);
  const [metaDesc, setMetaDesc] = useState(jobData.metaDesc);

  const handleSubmitData = (e) => {
    const jobData = { title, cat, desc, metaDesc, metaKey, metaTitle };
    e.preventDefault();
    updateJobs(path, jobData, dispatch);
    navigate("/jobs");
  };

  return (
    <>
      <div className="editJobs">
        <Sidebar />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="container-fluid editJobsContainer">
            <div className="row">
              <div className="col-md-12">
                <div className="editJobTitle text-center">Edit Job</div>

                <form className="addJobForm">
                  <div className="row">
                    {/* left side */}
                    <div className="col-md-6">
                      <div className="editJobsInputField">
                        {/* title */}
                        <label htmlFor="">Job Title</label>
                        <br />
                        <input
                          type="text"
                          name="title"
                          defaultValue={jobData.title}
                          autoComplete="off"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className="editJobsInputField">
                        <label htmlFor="">Category</label>
                        <br />
                        <select
                          onChange={(e) => setCat(e.target.value)}
                          name="cat"
                        >
                          {categoryData?.map((item) => (
                            <option value={item.title} key={item._id}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* meta data */}
                      <div className="seoMetaData mt-3">
                        {/* meta title */}
                        <h3>SEO Meta</h3>
                        <div className="inputField">
                          <label htmlFor="">Meta Title</label>
                          <br />
                          <input
                            type="text"
                            name="metaTitle"
                            autoComplete="off"
                            defaultValue={jobData.metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                          />
                        </div>
                        {/* meta keywords */}
                        <div className="inputField">
                          <label htmlFor="">Meta KeyWords</label>
                          <br />
                          <input
                            type="text"
                            name="metaKey"
                            defaultValue={jobData.metaKey}
                            autoComplete="off"
                            onChange={(e) => setMetaKey(e.target.value)}
                          />
                        </div>
                        {/* meta desc */}
                        <div className="inputField">
                          <label htmlFor="">Meta Description</label>
                          <br />
                          <input
                            type="text"
                            name="metadesc"
                            defaultValue={jobData.metaDesc}
                            autoComplete="off"
                            onChange={(e) => setMetaDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* job desc */}
                  <div className="editJobsInputField">
                    <label htmlFor="">Description</label>
                    <div className="reactQuill">
                      <div
                        name="desc"
                        onChange={(e) => setDesc(e.target.value)}
                        ref={quillRef}
                      />
                      {/* {oldDelta} */}
                      {/* create btn */}
                      <div className="editJobButton">
                        <button onClick={handleSubmitData}>update</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditJobs;
