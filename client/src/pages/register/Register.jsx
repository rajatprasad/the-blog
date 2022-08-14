import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://dev-theblog.herokuapp.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <Link to="/" className="link">
        <div className="registerLogo">
          <h1 className="registerLogoText">Dev</h1>
        </div>
      </Link>
      <span className="registerTitle">Create an account</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        {/* <lable>Username</lable> */}
        <input
          className="registerInput"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <lable>Email</lable> */}
        <input
          className="registerInput"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <lable>Password</lable> */}
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && <span className="registerError">Something went wrong!</span>}
    </div>
  );
};

export default Register;
