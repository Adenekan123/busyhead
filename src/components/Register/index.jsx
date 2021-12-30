import React, { useState, useEffect } from "react";
import { Wrapper } from "./Register.styles";
import { useNavigate, Link } from "react-router-dom";

import { BASE_API_URL } from "../../utils/constant";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    title: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateinput = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  async function regUser(event) {
    event.preventDefault();
    const id = toast.loading("Submitting Data");
    try {
      const response = await fetch(`${BASE_API_URL}/api/user`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...state }),
      });

      const result = await response.json();
      console.log(result);
      if (result._id) {
        toast.update(id, {
          render: "Account Created Successfully. Now Login",
          type: "success",
          isLoading: false,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 7000,
        });
        return navigate("/login", { replace: true });
      }
    } catch (err) {
      toast.update(id, {
        render: "Unable To Submit Data. Check Your Internet Connection",
        type: "error",
        isLoading: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 7000,
      });
    }
  }
  return (
    <Wrapper>
      <form onSubmit={regUser}>
        <legend>Create Account</legend>

        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter Firstname"
          onChange={updateinput}
        />

        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter Lastname"
          onChange={updateinput}
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          onChange={updateinput}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Phone"
          onChange={updateinput}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={updateinput}
        />

        <label htmlFor="title">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={updateinput}
        />

        <center>
          <button>Register</button>
        </center>
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
      <ToastContainer />
    </Wrapper>
  );
};

export default Register;
