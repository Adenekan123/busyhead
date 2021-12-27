import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./Reminder.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";

import { BASE_API_URL } from "../../utils/constant";

//Actions
import { setReminders, getReminders } from "../../redux/ducks/reminder";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Reminders = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();

  const archiveAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/reminders/archive`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setReminders(data));
    setSelect([]);
  };
  const deleteAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/reminders/delete`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setReminders(data));
    setSelect([]);
  };

  useEffect(() => {
    console.log("re-rendered the state");
    dispatch(getReminders());
    console.log("ran dispatch");
  }, [dispatch]);

  const todos = useSelector((state) => state.reminders.reminders);
  if (!Array.isArray(todos) || todos.length === 0)
    return <h3>No reminders found</h3>;

  return (
    <Wrapper>
      <ActionBtns
        btns={[
          { title: "Done it", action: archiveAll },
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

export default Reminders;
