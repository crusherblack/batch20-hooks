import React, { useState, useContext } from "react";
import { AppContext } from "../context/globalContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const onChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "fadhildarma13@gmail.com" && password === "12345678") {
      alert(`Berhasil Login Email ${email} | Password ${password}`);
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      history.push("/home");
    } else {
      alert("Email dan Password salah");
      dispatch({
        type: "LOGOUT",
      });
    }
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header bg-white">
          <h2 className="text-center">
            Login To Start {state.isLogin ? "Sudah Login" : "Belum Login"}
          </h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Login</button>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <pre>{JSON.stringify(loginFormData, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
