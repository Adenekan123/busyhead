import React from "react";
import DateCountdown from "react-date-countdown-timer";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../redux/ducks/todos";
import { getReminders } from "../../redux/ducks/reminder";

const callback = (todos, docid, _id, dispatch) => {
  const newtodos = [...todos];
  const todoindex = newtodos.findIndex((todo) => todo._id === docid);
  newtodos[todoindex].tasks = newtodos[todoindex].tasks.filter(
    (task) => task._id != _id
  );
  dispatch(setTodos(newtodos));
  dispatch(getReminders());
};

const RenderDate = ({ date, todos, docid, _id }) => {
  const dispatch = useDispatch();

  return (
    <Countdown
      date={date}
      renderer={() => callback(todos, docid, _id, dispatch)}
    />
  );
};

export default RenderDate;
