import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./Card.styles";
import Countdown from "react-countdown";

import { useDispatch } from "react-redux";

import { setTodos } from "../../redux/ducks/todos";
import { getReminders } from "../../redux/ducks/reminder";

const Card = ({ todos, task, docid, showdate, toggleSelect, isSelected }) => {
  const dispatch = useDispatch();

  const { _id, title, date } = task;
  let pathname = location.pathname;
  pathname = pathname == "/" ? "/todos" : pathname;

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
    <Wrapper>
      {isSelected(docid, _id) ? (
        <input
          type="checkbox"
          onClick={() => toggleSelect(docid, _id)}
          checked={true}
        />
      ) : (
        <input
          type="checkbox"
          onClick={() => toggleSelect(docid, _id)}
          name=""
          id=""
        />
      )}
      <div>
        {showdate && (
          <div className="countdown">
            <Countdown date={date} onComplete={callback} />
          </div>
        )}

        <div className="body">
          <h4>{title}</h4>
          <Link to={`/viewtask${pathname}/${docid}/${_id}`}>View</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
