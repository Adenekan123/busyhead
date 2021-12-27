import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./Archive.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";

//Actions
import { getArchive, setArchive } from "../../redux/ducks/archive";

import { BASE_API_URL } from "../../utils/constant";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Archives = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();

  const resetAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/archives/reset`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setArchive(data));
    setSelect([]);
  };
  const deleteAll = async () => {
    const allSelects = [...select];
    const response = await fetch(`${BASE_API_URL}/api/archives/delete`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ allSelects }),
    });

    const { data } = await response.json();
    dispatch(setArchive(data));
    setSelect([]);
  };

  useEffect(() => {
    dispatch(getArchive());
  }, [dispatch]);

  const todos = useSelector((state) => state.archives.archives);
  if (!Array.isArray(todos) || todos.length === 0)
    return <h3>No Archives found</h3>;

  return (
    <Wrapper>
      <ActionBtns
        btns={[
          { title: "Reset task", action: resetAll },
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

export default Archives;
