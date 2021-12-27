import React from "react";
import DateCountdown from "react-date-countdown-timer";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../redux/ducks/todos";
import { getReminders } from "../../redux/ducks/reminder";

const CountDown = ({ date, docid, _id }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const callback = () => {
    const newtodos = [...todos];
    const todoindex = newtodos.findIndex((todo) => todo._id === docid);
    newtodos[todoindex].tasks = newtodos[todoindex].tasks.filter(
      (task) => task._id != _id
    );
    dispatch(setTodos(newtodos));
    dispatch(getReminders());
  };

  return (
    <DateCountdown
      style={{ zIndex: "0", border: "1px solid red" }}
      dateFrom={new Date()}
      dateTo={new Date(date)}
      callback={callback}
    />
  );
};

export default CountDown;
