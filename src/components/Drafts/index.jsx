import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Drafts.styles";
import List from "../List";
import ActionBtns from "../ActionBtns";
import Loader from "../Loader";

//Actions
import { getDraft, setDraft, setLoader } from "../../redux/ducks/drafts";

import { BASE_API_URL } from "../../utils/constant";

//Custom hooks
import useSelect from "../../hooks/useSelect";

const Drafts = () => {
  const { select, setSelect, toggleSelect, toggleSelectAll, isSelected } =
    useSelect();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDraft());
  }, [dispatch]);

  const addAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };
  const deleteAll = async () => {
    dispatch(setLoader(true));
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
    dispatch(setLoader(false));
    setSelect([]);
  };

  const loader = useSelector((state) => state.drafts.loader);
  const todos = useSelector((state) => state.drafts.drafts);

  if (todos && todos.loggedin === false) {
    dispatch(setLoader(false));
    localStorage.removeItem("isAuth");
    navigate("/login");
  }

  if (todos && todos.length === 0) {
    dispatch(setLoader(false));
    return <h3>No Drafts found</h3>;
  }

  return (
    <Wrapper>
      {loader && <Loader />}
      <ActionBtns
        btns={[
          { title: "Add to task", action: addAll },
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

export default Drafts;
