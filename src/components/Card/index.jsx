import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./Card.styles";
import CountDown from "../CountDown";

import { useDispatch } from "react-redux";

const Card = ({ todos, task, docid, showdate, toggleSelect, isSelected }) => {
  const { _id, title, date } = task;
  let pathname = location.pathname;
  pathname = pathname == "/" ? "/todos" : pathname;

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
            {date}
            {/* <CountDown todos={todos} date={date} docid={docid} _id={_id} /> */}
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
