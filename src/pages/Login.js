import React from "react";
import "../App.css";

const Login = () => {
  return (
    <>
      <main className="form-signin w-50 m-auto mx-auto my-4 shadow-lg p-3 bg-body rounded">
        <form>
          <img
            className="mb-4 mx-auto d-block"
            src="../images/companylogo.jpg"
            alt=""
            width="72"
            height="57"
          />
          <div className="abc">
            <h1 className="h4 mb-3 fw-normal ">Please sign in</h1>
          </div>
          <div className="form-floating mb-1">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </>
  );
};

export default Login;
