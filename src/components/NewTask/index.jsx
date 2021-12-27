import React, { useState, useEffect } from "react";

import { Wrapper } from "./NewTask.styles";

import { BASE_API_URL } from "../../utils/constant";

const inistialState = {
  title: "",
  reminderdate: "",
  // remindertime: "",
  description: "",
};

const NewTask = () => {
  const [state, setState] = useState(inistialState);

  const updateInput = (event) =>
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

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
    const response = await fetch(`${BASE_API_URL}/api/todos/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...state }),
    });

    const result = await response.json();
    if (result._id) {
      alert("Task added successfully");
      setState(inistialState);
    }
  };
  const handleDraftSubmit = async () => {
    if (!validateInput()) return alert("Please enter all required fileds");
    const response = await fetch(`${BASE_API_URL}/api/draft/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...state }),
    });

    const result = await response.json();
    if (result._id) {
      alert("Draft added successfully");
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
        {/* <div>
                    <label>Reminder Time:</label>
                    <input type="time" name="remindertime" placeholder="Enter title" id="" onChange={updateInput} value={state.remindertime} />
                </div> */}
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
            Add to task
          </button>
          <button type="button" onClick={handleDraftSubmit}>
            Add to draft
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default NewTask;
