import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "./Login.styles";

import { BASE_API_URL } from "../../utils/constant";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsAuth }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateinput = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  async function loginUser(event) {
    event.preventDefault();

    const id = toast.loading("Authenticating User");
    try {
      const response = await fetch(`${BASE_API_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...state }),
      });

      const result = await response.json();
      console.log(result);
      if (result.loggedin == true) {
        toast.update(id, {
          render: "Login Successful",
          type: "success",
          isLoading: false,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 7000,
        });
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        return navigate("/", { replace: true });
      } else {
        toast.update(id, {
          render: "Invalid Username or Password",
          type: "error",
          isLoading: false,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 7000,
        });
      }
    } catch (err) {
      setIsAuth(false);
    }
  }

  return (
    <Wrapper>
      <form onSubmit={loginUser}>
        <legend>Busy Head</legend>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={updateinput}
          value={state.username}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={updateinput}
          value={state.password}
        />
        <center>
          <button>Login</button>
        </center>
        <p>
          New user ? <Link to="/adduser">Create new account</Link>
        </p>
      </form>
      <ToastContainer autoClose={8000} />
    </Wrapper>
  );
};

export default Login;
