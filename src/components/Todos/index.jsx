import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Todos.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";
import Loader from "../Loader";

import { BASE_API_URL } from "../../utils/constant";

//Actions
import { getTodos, setTodos, setLoader } from "../../redux/ducks/todos";

//Custom hooks
import useSelect from "../../hooks/useSelect";
import { getReminders } from "../../redux/ducks/reminder";

const Todos = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(getReminders());
  }, [dispatch]);

  const archiveAll = async () => {
    dispatch(setLoader(true));
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/todos/archive`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setTodos(data));
    dispatch(setLoader(false));
    setSelect([]);
  };

  const deleteAll = async () => {
    dispatch(setLoader(true));
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/todos/trash`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setTodos(data));
    dispatch(setLoader(false));
    setSelect([]);
  };

  const loader = useSelector((state) => state.todos.loader);
  const todos = useSelector((state) => state.todos.todos);

  if (todos && todos.loggedin === false) {
    dispatch(setLoader(false));
    localStorage.removeItem("isAuth");
    navigate("/login");
  }

  if (todos && todos.length === 0) {
    dispatch(setLoader(false));
    return <h3>No todos found</h3>;
  }

  return (
    <Wrapper>
      {loader && <Loader />}
      <ActionBtns
        btns={[
          { title: "Archive", action: archiveAll },
          { title: "Delete", action: deleteAll },
        ]}
      />
      {todos && Array.isArray(todos) ? (
        todos.map((todo, index) => (
          <List
            todos={todos}
            showdate={true}
            todo={todo}
            select={select}
            toggleSelectAll={toggleSelectAll}
            archiveAll={archiveAll}
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
