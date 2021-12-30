import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Recycles.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";
import Loader from "../Loader";

import { BASE_API_URL } from "../../utils/constant";

//Actions
import {
  getRecycles,
  setRecycles,
  setLoader,
} from "../../redux/ducks/recycles";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Todos = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecycles());
    console.log("ran dispatch");
  }, [dispatch]);

  const restoreeAll = async () => {
    dispatch(setLoader(true));
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/recycles/restore`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setRecycles(data));
    dispatch(setLoader(false));
    setSelect([]);
  };
  const deleteAll = async () => {
    dispatch(setLoader(true));
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/recycles/delete`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setRecycles(data));
    dispatch(setLoader(false));
    setSelect([]);
  };

  const loader = useSelector((state) => state.recycles.loader);
  const todos = useSelector((state) => state.recycles.recycles);
  // console.log(todos);
  if (todos && todos.loggedin === false) {
    dispatch(setLoader(false));
    localStorage.removeItem("isAuth");
    navigate("/login");
  }

  if (todos && todos.length === 0) {
    dispatch(setLoader(false));
    return <h3>No Recycles found</h3>;
  }

  return (
    <Wrapper>
      {loader && <Loader />}
      <ActionBtns
        btns={[
          { title: "Restore", action: restoreeAll },
          { title: "Delete", action: deleteAll },
        ]}
      />
      {todos && Array.isArray(todos) ? (
        todos.map((todo, index) => (
          <List
            showdate={false}
            todo={todo}
            toggleSelectAll={toggleSelectAll}
            toggleSelect={toggleSelect}
            isSelected={isSelected}
            key={index}
          />
        ))
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Todos;
