import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./Recycles.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";

import { BASE_API_URL } from "../../utils/constant";

import axios from "axios";

//Actions
import { getRecycles, setRecycles } from "../../redux/ducks/recycles";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Todos = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();

  const restoreeAll = async () => {
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
    setSelect([]);
  };
  const deleteAll = async () => {
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
    setSelect([]);
  };

  useEffect(() => {
    console.log("re-rendered the state");
    dispatch(getRecycles());
    console.log("ran dispatch");
  }, [dispatch]);

  const todos = useSelector((state) => state.recycles.recycles);
  // console.log(todos);
  if (!Array.isArray(todos) || todos.length === 0)
    return <h3>No Recycles found</h3>;

  return (
    <Wrapper>
      <ActionBtns
        btns={[
          { title: "Restore", action: restoreeAll },
          { title: "Delete", action: deleteAll },
        ]}
      />
      {todos && Array.isArray(todos)
        ? todos.map((todo, index) => (
            <List
              showdate={false}
              todo={todo}
              toggleSelectAll={toggleSelectAll}
              toggleSelect={toggleSelect}
              isSelected={isSelected}
              key={index}
            />
          ))
        : "Loading.."}
    </Wrapper>
  );
};

export default Todos;
