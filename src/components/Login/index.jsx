import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "./Login.styles";

import { BASE_API_URL } from "../../utils/constant";

const Login = ({ setIsAuth }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateinput = (e) => {
    console.log(e.target.value);
    setState((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  async function loginUser(event) {
    event.preventDefault();
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
        console.log("setting is Auth");
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        return navigate("/", { replace: true });
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
    </Wrapper>
  );
};

export default Login;
