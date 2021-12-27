import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./Drafts.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";

//Actions
import { getDraft, setDraft } from "../../redux/ducks/drafts";

import { BASE_API_URL } from "../../utils/constant";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Drafts = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();

  const addAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/drafts/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setDraft(data));
    setSelect([]);
  };
  const deleteAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/drafts/delete`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    // console.log({data})
    dispatch(setDraft(data));

    setSelect([]);
  };

  useEffect(() => {
    dispatch(getDraft());
  }, [dispatch]);

  const todos = useSelector((state) => state.drafts.drafts);
  if (!Array.isArray(todos) || todos.length === 0)
    return <h3>No Draft found</h3>;

  return (
    <Wrapper>
      <ActionBtns
        btns={[
          { title: "Add to task", action: addAll },
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

export default Drafts;
