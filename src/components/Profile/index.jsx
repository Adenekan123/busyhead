import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import { getProfile } from "../../redux/ducks/profile";
import { useSelector, useDispatch } from "react-redux";

import { BASE_API_URL } from "../../utils/constant";

import { Navigate } from "react-router-dom";

import ProfileList from "../ProfileList";

export default function Profile({ setIsAuth }) {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      setIsAuth(false);
      localStorage.removeItem("isAuth");
      return <Navigate to="/login" />;
    } catch (err) {
      console.log(err);
    }
  };

  const profile = useSelector((state) => state.profile.profile);

  const [showProfile, setShowProfile] = useState(false);

  const onSetSidebarOpen = () => {
    setShowProfile((state) => !state);
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <Sidebar
      sidebar={<ProfileList data={profile} logout={logout} />}
      pullRight={true}
      open={showProfile}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {
          background: "white",
          width: "300px",
          padding: 0,
          position: "fixed",
          top: "4rem",
        },
        overlay: {
          background: "none",
          top: "4rem",
          right: 0,
          width: "200px",
          marginLeft: "auto",
          padding: 0,
        },
        root: {
          right: 0,
          width: "80px",
          height: "4rem",
          left: "auto",
          padding: 0,

          // overflow: "auto",

          display: "flex",
        },
      }}>
      <i
        className="fas fa-user-circle"
        style={{
          fontSize: "1.5rem",
          display: "block",
          float: "right",
          marginTop: "1.2rem",
          marginRight: "2rem",
        }}
        onClick={() => onSetSidebarOpen()}></i>
    </Sidebar>
  );
}
