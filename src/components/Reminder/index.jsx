import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Reminder.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";
import Loader from "../Loader";

import { BASE_API_URL } from "../../utils/constant";

//Actions
import {
  setReminders,
  getReminders,
  setLoader,
} from "../../redux/ducks/reminder";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Reminders = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getReminders());
    console.log("ran dispatch");
  }, [dispatch]);

  const archiveAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };
  const deleteAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };

  const loader = useSelector((state) => state.reminders.loader);
  const todos = useSelector((state) => state.reminders.reminders);
  if (todos && todos.loggedin === false) {
    dispatch(setLoader(false));
    localStorage.removeItem("isAuth");
    navigate("/login");
  }

  if (todos && todos.length === 0) {
    dispatch(setLoader(false));
    return <h3>No Reminders found</h3>;
  }

  return (
    <Wrapper>
      {loader && <Loader />}
      <ActionBtns
        btns={[
          { title: "Done it", action: archiveAll },
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

export default Reminders;
