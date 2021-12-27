import React from "react";
import { Wrapper } from "./Aside.styles";
import { Link, NavLink } from "react-router-dom";

//Hooks
import useMenu from "../../hooks/useMenu";

const Aside = () => {
  const { showMenu, setShowMenu } = useMenu();
  let activeClassName = "active";

  const toggleMenu = () => {
    const menuState = showMenu;
    if (menuState) setShowMenu(false);
  };

  return (
    <Wrapper showMenu={showMenu}>
      <p onClick={() => setShowMenu((prev) => !prev)}>
        {showMenu ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </p>
      <ul>
        <li>
          <NavLink
            to="/newtask"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => toggleMenu()}>
            <i className="far fa-plus-square"></i>
            <span>Add New</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => toggleMenu()}>
            <i className="far fa-list-alt"></i>
            <span>Todos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drafts"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => toggleMenu()}>
            <i className="far fa-sticky-note"></i>
            <span>Drafts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archives"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => toggleMenu()}>
            <i className="fas fa-history"></i>
            <span>Archive</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recycles"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => toggleMenu()}>
            <i className="far fa-trash-alt"></i>
            <span>Recycles</span>
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Aside;
