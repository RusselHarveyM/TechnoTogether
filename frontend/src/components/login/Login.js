import "./Login.css";

function Login() {
  return (
    <div className="login_body">
      <div className="login_container">
        <h1 className="login_fields">Log In</h1>
        <form action="">
          <div className="field_div">
            <label htmlFor="usernme" className="login_fields">
              Username:
            </label>
            <input type="text" name="username" />
          </div>
          <div className="field_div">
            <label htmlFor="password" className="login_fields">
              Password:
            </label>
            <input type="password" name="password" />
          </div>
          <input type="submit" value="Submit" className="loginBtn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
