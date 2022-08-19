import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { updateProfile } from "../../redux/apiCalls";
import "./Profile.css";
const Profile = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // const userId = user.others._id;

  //get user data from user id
  const [isLoading, setLoading] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setLoading(false);
    const getUserData = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/user/user");
      setUserData(res.data[0]);
      console.log(userData);
    };
    getUserData();
  }, []);

  // useEffect(() => {
  //   setLoading(false);
  //   const getUserData = async () => {
  //     setDidMount(true);
  //     try {
  //       const res = await axios.get("/user/find" + userId);
  //       setUserData(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserData();
  //   setLoading(false);
  //   return () => setDidMount(false);
  // }, [userId]);

  //update username and email
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);

  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };
  // update user details

  const [progress, setProgress] = useState();
  const [contactEmail, setContactEmail] = useState(userData.contactEmail);
  const [desc, setDesc] = useState(userData.desc);
  const [brandname, setBrandname] = useState(userData.brandname);
  const [facebook, setFacebook] = useState(userData.facebook);
  const [twitter, setTwitter] = useState(userData.twitter);
  const [insta, setInsta] = useState(userData.insta);
  const [contact, setcontact] = useState(userData.contact);
  const [metaTitle, setMetaTitle] = useState(userData.metaTitle);
  const [metaKey, setMetaKey] = useState(userData.metaKey);
  const [metaDesc, setMetaDesc] = useState(userData.metaDesc);
  const [address, setAddress] = useState(userData.address);

  // const handleSave = (e) => {
  //   e.preventDefault();
  //   const data = { username, email };
  //   updateProfile(userId, data, dispatch);
  //   window.location.replace("/");
  // };

  return (
    <div>
      <div className="profile">
        <Sidebar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="profileContainer">
            {/* profile top content  */}
            <div className="profileTitle">Profile</div>
            <div className="profileTopbar">
              {/* information icon  */}
              <NavLink
                className={({ isActivate }) =>
                  isActivate ? "activate link" : ""
                }
                to="/profile"
              >
                information
              </NavLink>
              {/* key icon (change password)  */}
              <NavLink
                className={({ isActivate }) =>
                  isActivate ? "activate link" : ""
                }
                to="/password"
              >
                security
              </NavLink>
            </div>
            {/* change email and username input field  */}
            <form action="" className="form">
              {/* username  */}
              <div className="changeUserData">
                <div className="changeUserDataInputField">
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    defaultValue={userData.name}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* email  */}
                <div className="changeUserDataInputField">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    defaultValue={userData.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* other setting */}
              <div className="setting">
                {/* <div className="coreLeft">
              <CoreWidget />
            </div> */}

                <div className="coreRight">
                  <div className="companyLogo">
                    {image ? (
                      <>
                        <div className="uploadLogoBtnImg">
                          <img src={image} alt="img" />
                          <label htmlFor="files">
                            <p>Logo</p>
                            <input
                              type="file"
                              id="files"
                              style={{ display: "none" }}
                              name="logo"
                              onChange={onImageChange}
                            />
                          </label>
                        </div>
                      </>
                    ) : (
                      <div className=" uploadLogoBtnImg mt-3">
                        <img src={userData.logo} alt="blog_img" />
                        <label htmlFor="files">
                          <p>Logo</p>
                          <input
                            type="file"
                            id="files"
                            style={{ display: "none" }}
                            name="logo"
                            onChange={onImageChange}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  {/* input field  */}
                  <form action="" className="coreFields">
                    {/* input fields */}
                    <div className="coreInputField">
                      {/* brandname */}
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Brand Name</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={userData.brandname}
                          name="brandname"
                          autoComplete="off"
                          onChange={(e) => setBrandname(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* description */}
                    <div className="coreInputField">
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Description</label>
                        <br />
                        <textarea
                          type="text"
                          defaultValue={userData.desc}
                          name="desc"
                          autoComplete="off"
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* contact details */}
                    <div className="contactDetails">
                      <p>Contact Details</p>
                    </div>
                    <div className="coreInputField">
                      <br />
                      {/*  contact Email*/}
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Contact Email</label>
                        <br />
                        <input
                          type="text"
                          onChange={(e) => setContactEmail(e.target.value)}
                          name="contactEmail"
                          autoComplete="off"
                          defaultValue={userData.email}
                        />
                      </div>

                      {/* contact number */}
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Contact Number</label>
                        <br />
                        <input
                          type="number"
                          defaultValue={userData.contact}
                          name="contact"
                          autoComplete="off"
                          onChange={(e) => setcontact(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* address */}
                    <div className="coreInputFieldItem">
                      <label
                        htmlFor=""
                        style={{ color: "gray", marginTop: 10 }}
                      >
                        Address
                      </label>
                      <br />
                      <input
                        type="text"
                        defaultValue={userData.address}
                        name="address"
                        autoComplete="off"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    {/* social information */}
                    <div className="socialDetails">
                      <p>Social Information</p>
                    </div>
                    <div className="coreInputField">
                      <br />
                      {/* facebook */}
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Facebook link</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={userData.facebook}
                          name="facebook"
                          autoComplete="off"
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                      </div>
                      {/* twitter */}
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Twitter link</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={userData.twitter}
                          name="twitter"
                          autoComplete="off"
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* instagram */}
                    <div className="coreInputField">
                      <br />
                      <div className="coreInputFieldItem">
                        <label htmlFor="">Instagram link</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={userData.insta}
                          name="insta"
                          autoComplete="off"
                          onChange={(e) => setInsta(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* seo keywords(SEO MetaData) */}
                    <div className="col-md-12">
                      {/* meta data */}
                      <div className="settingSeoMetaData mt-3">
                        {/* meta title */}
                        <p>SEO Meta</p>
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta Title</label>
                          <br />
                          <input
                            type="text"
                            name="metaTitle"
                            defaultValue={userData.metaTitle}
                            autoComplete="off"
                            onChange={(e) => setMetaTitle(e.target.value)}
                          />
                        </div>
                        {/* meta keywords */}
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta KeyWords</label>
                          <br />
                          <input
                            type="text"
                            name="metaKey"
                            defaultValue={userData.metaKey}
                            autoComplete="off"
                            onChange={(e) => setMetaKey(e.target.value)}
                          />
                        </div>
                        {/* meta desc */}
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta Description</label>
                          <br />
                          <input
                            type="text"
                            name="metadesc"
                            defaultValue={userData.metaDesc}
                            autoComplete="off"
                            onChange={(e) => setMetaDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* save button */}
                    <div className="seveButton">
                      <button>save changes</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* submit button  */}
              {/*<div className="submitbutton">
                <button type="button">
                 
                  save changes
                </button>
              </div>*/}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
