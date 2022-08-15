import React from "react";
import { loginUser } from "../../redux/apiCalls";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  //logout user after time
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const value = { email, password };
    loginUser(dispatch, value);
  };
  return (
    <div className="loginPage">
      <form className="loginForm">
        {/* company logo  */}
        <div className="companyLogo">
          <img src="" />
        </div>
        <div className="LoginFormContainer">
          <h4>Sign-In</h4>
          {/* email  */}
          <div className="inputBox">
            <label>Email</label>
            <input
              label="Email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
          </div>

          {/* password  */}
          <div className="inputBox">
            <label>Password</label>
            <input
              label="Password"
              name="passsword"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            {/* login button  */}
            <button onClick={handleLogin} disabled={isFetching}>
              {" "}
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
