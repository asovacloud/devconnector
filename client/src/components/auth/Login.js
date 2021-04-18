import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {email, password} = formData;

  const handleOnChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = async e => {
    e.preventDefault();
    console.log("SUCCESS");
  };

  return (
    <>
      <h1 className="large text-primary">Log in</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => handleOnSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={e => handleOnChange(e)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;
