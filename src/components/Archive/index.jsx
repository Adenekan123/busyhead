import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Archive.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";
import Loader from "../Loader";

//Actions
import { getArchive, setArchive, setLoader } from "../../redux/ducks/archive";

import { BASE_API_URL } from "../../utils/constant";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Archives = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArchive());
  }, [dispatch]);

  const resetAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };
  const deleteAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };

  const loader = useSelector((state) => state.archives.loader);
  const todos = useSelector((state) => state.archives.archives);

  if (todos && todos.loggedin === false) {
    dispatch(setLoader(false));
    localStorage.removeItem("isAuth");
    navigate("/login");
  }

  if (todos && todos.length === 0) {
    dispatch(setLoader(false));
    return <h3>No archives found</h3>;
  }

  return (
    <Wrapper>
      {loader && <Loader />}
      <ActionBtns
        btns={[
          { title: "Reset task", action: resetAll },
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

export default Archives;
