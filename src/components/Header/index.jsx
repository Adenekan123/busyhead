import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./Header.styles";
import { Link } from "react-router-dom";

import Profile from "../Profile";

//Hooks

const Header = ({ isAuth, setIsAuth }) => {
  console.log({ isAuth });
  const totalReminders = useSelector((state) => state.reminders.totalReminders);

  return (
    <Wrapper>
      <p> Busy Head</p>
      <>
        <Link to="/reminders" className="notification">
          <i className="fas fa-bell"></i>
          {totalReminders ? <span>{totalReminders}</span> : ""}
        </Link>
        {isAuth && <Profile setIsAuth={setIsAuth} />}
      </>
    </Wrapper>
  );
};

export default Header;
