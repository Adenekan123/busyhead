import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./Todos.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";

import { BASE_API_URL } from "../../utils/constant";

//Actions
import { getTodos, setTodos } from "../../redux/ducks/todos";

//Custom hooks
import useSelect from "../../hooks/useSelect";
import { getReminders } from "../../redux/ducks/reminder";

const Todos = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();

  const archiveAll = async () => {
    // console.log('Ran archiveAll')
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
    dispatch(getReminders());
    setSelect([]);
  };
  const deleteAll = async () => {
    // console.log('Ran deleteeAll')
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
    setSelect([]);
  };

  useEffect(() => {
    console.log("re-rendered the state");
    dispatch(getTodos());
    dispatch(getReminders());
    console.log("ran dispatch");
  }, [dispatch]);

  const todos = useSelector((state) => state.todos.todos);
  console.log({ todos });
  if (!Array.isArray(todos) || todos.length === 0)
    return <h3>No todos found</h3>;

  return (
    <Wrapper>
      <ActionBtns
        btns={[
          { title: "Archive", action: archiveAll },
          { title: "Delete", action: deleteAll },
        ]}
      />
      {todos && Array.isArray(todos)
        ? todos.map((todo, index) => (
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
        : "Loading.."}
    </Wrapper>
  );
};

export default Todos;
