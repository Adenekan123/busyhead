import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./ViewTask.styles";

import { BASE_API_URL } from "../../utils/constant";

const inistialState = {
  title: "",
  reminderdate: "",
  description: "",
};

const NewTask = () => {
  const { document, docid, id } = useParams();

  const [state, setState] = useState(inistialState);

  const updateInput = (event) =>
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  useEffect(() => {
    if (document && docid) {
      console.log(`${BASE_API_URL}/${document}/${docid}/${id}`);
      fetch(`${BASE_API_URL}/api/${document}/${docid}/${id}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log({ result });

          const { tasks } = result.data[0];
          setState((prevState) => ({
            title: tasks[0].title,
            description: tasks[0].description,
            reminderdate: tasks[0].date,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const validateInput = () => {
    const inputs = { ...state };
    // console.log(inputs);
    for (let key in inputs) {
      if (inputs[key] === "" || inputs[key] === undefined) return false;
    }
    return true;
  };

  const handleTodoSubmit = async () => {
    if (!validateInput()) return alert("Please enter all required fileds");
    const response = await fetch(`${BASE_API_URL}/api/${document}/update`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...state, docid, id }),
    });

    const result = await response.json();
    console.log(result);
    if (result.updatedCount) {
      alert("Task updated successfully");
      setState(inistialState);
    }
  };

  return (
    <Wrapper>
      <form action="">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            id=""
            onChange={updateInput}
            value={state.title}
          />
        </div>
        <div>
          <label>Reminder Date:</label>
          <input
            type="datetime-local"
            name="reminderdate"
            placeholder="Enter title"
            id=""
            onChange={updateInput}
            value={state.reminderdate}
          />
        </div>
        <div>
          <label>Note:</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Enter description"
            onChange={updateInput}
            value={state.description}></textarea>
        </div>
        <div className="form_action">
          <button type="button" onClick={handleTodoSubmit}>
            Edit task
          </button>
          {/* <button type="button" onClick = {handleDraftSubmit}>Add draft</button> */}
        </div>
      </form>
    </Wrapper>
  );
};

export default NewTask;
