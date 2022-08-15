import "./App.css";
import AddBlog from "./pages/AddBlog/AddBlog";
import Login from "./pages/Login/Login.js";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/Blog/Blog";
import EditBlog from "./pages/editBlog/EditBlog";
import AllJobs from "./pages/AllJobs/AllJobs";
import CreateJob from "./pages/createJob/CreateJob";
import EditJobs from "./pages/editJobs/EditJobs";
import AllCategory from "./pages/category/AllCategory";
import CreateCategory from "./pages/createCategory/CreateCategory";
import EditCategory from "./pages/editCategory/EditCategory";
import ChangePassword from "./pages/changePassword/ChangePassword";

import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/navbar/Topbar";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Setting/Setting";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  // user = "jjj";
  return (
    <div>
      <Router>
        {user && (
          <>
            <Topbar />
            <Sidebar />
          </>
        )}

        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          {/* setting */}
          <Route
            path="/setting/core"
            element={user ? <Setting /> : <Navigate to="/login" />}
          />

          {/* all jobs page */}
          <Route
            path="/jobs"
            element={user ? <AllJobs /> : <Navigate to="/login" />}
          />

          {/* edit jobs */}
          <Route
            path="/job/:id"
            element={user ? <EditJobs /> : <Navigate to="/login" />}
          />

          {/* create new jobs */}
          <Route
            path="/createjobs"
            element={user ? <CreateJob /> : <Navigate to="/login" />}
          />

          {/* get all blogs */}
          <Route
            path="/blog"
            element={user ? <Blog /> : <Navigate to="/login" />}
          />
          {/* create new blogs */}
          <Route path="/newblog" element={user ? <AddBlog /> : <Login />} />

          {/* update blogs */}
          <Route
            path="/edit_blog/:id"
            element={user ? <EditBlog /> : <Navigate to="/login" />}
          />

          {/* category  */}
          <Route
            path="/category"
            element={user ? <AllCategory /> : <Navigate to="/login" />}
          />

          {/* create category */}
          <Route
            path="/create_cat"
            element={user ? <CreateCategory /> : <Navigate to="/login" />}
          />

          {/* edit category */}
          <Route
            path="/edit_cat/:id"
            element={user ? <EditCategory /> : <Navigate to="/login" />}
          />

          {/* profile page */}
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />

          {/* password change page */}
          <Route
            path="/password"
            element={user ? <ChangePassword /> : <Navigate to="/login" />}
          />
        </Routes>
        {/* login container */}
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
