import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login({ login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleClick = (e) => {
    e.preventDefault();

    login(details);
  };

  return (
    <div className="login_body">
      <div className="login_container">
        <h1 className="login_fields">Log In</h1>
        <form onSubmit={handleClick}>
          <div className="field_div">
            <label
              htmlFor="usernme"
              className="login_fields"
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
            >
              Username:
            </label>
            <input type="text" name="username" />
          </div>
          <div className="field_div">
            <label
              htmlFor="password"
              className="login_fields"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
            >
              Password:
            </label>
            <input type="password" name="password" />
          </div>
          <input type="submit" value="Submit" className="loginBtn" />
        </form>
        <Link to="" className="not_yet_rgstrd_link">
          No account yet?
        </Link>
      </div>
    </div>
  );
}

export default Login;
