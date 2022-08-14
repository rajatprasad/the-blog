import { useContext, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://dev-theblog.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <Link to="/" className="link">
        <div className="loginLogo">
          <h1 className="loginLogoText">Dev</h1>
        </div>
      </Link>
      <span className="loginTitle">Log in</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        {/* <lable>Username</lable> */}
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
          ref={userRef}
        />
        {/* <lable>Password</lable> */}
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
      </form>
      <p className="loginText">Don’t have an account?</p>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Create a new account
        </Link>
      </button>
    </div>
  );
};

export default Login;
