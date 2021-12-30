const express = require("express");
const cron = require("node-cron");
const mongoose = require("mongoose");

const Todo = require("../model/todo");
const Recycle = require("../model/recycle");
const Archive = require("../model/archive");
const Reminder = require("../model/reminder");

var userid = mongoose.Types.ObjectId();

//Helper
const {
  fetchDocs,
  fetchTaskById,
  func_alreadyAddedTasksToday,
  addTask,
  updateTask,
  moveTasks,
  activateDueTasks,
  isLoggedIn,
} = require("../helper");

const Router = express.Router();

Router.get("/api/todos", isLoggedIn, async (req, res) => {
  try {
    const todos = await fetchDocs(Todo, req.user._id);
    userid = req.user._id;
    res.json(todos);
  } catch (err) {
    res.json({ failed: true, data: [] });
  }
});

Router.get("/api/todos/:docid/:id", isLoggedIn, async (req, res) => {
  const { docid: todoid, id } = req.params;
  console.log(req.params);
  try {
    const todo = await fetchTaskById(Todo, todoid, id, req.user._id);
    if (todo != null) return res.json({ failed: false, data: todo });
    throw new Error();
  } catch (err) {
    res.json([]);
  }
});

Router.post("/api/todos/add", isLoggedIn, async (req, res) => {
  const { title, description, reminderdate } = req.body;

  const newTask = { title, description, date: reminderdate };

  const newTodo = {
    user: req.user._id,
    tasks: [newTask],
  };

  try {
    const alreadyAddedTasksToday = await func_alreadyAddedTasksToday(
      Todo,
      req.user._id
    );
    if (alreadyAddedTasksToday) {
      const response = await addTask(Todo, newTask, req.user._id);
      return res.json(response);
    } else {
      const query = await new Todo(newTodo);
      const response = await query.save();
      res.json(response);
    }
  } catch (err) {
    console.log(err);
  }
});

Router.post("/api/todos/update", isLoggedIn, async (req, res) => {
  const { docid, id, title, description, reminderdate: date } = req.body;
  try {
    const response = await updateTask(
      Todo,
      docid,
      id,
      { title, description, date },
      req.user._id
    );
    if (response.modifiedCount > 0) return res.json({ updatedCount: 1 });
    throw new Error();
  } catch (err) {
    console.log(err);
    res.json({ updatedCount: 0 });
  }
});

//Valid
Router.delete("/api/todos/trash", isLoggedIn, async (req, res) => {
  const { allSelects } = req.body;

  try {
    let deletedCount = 0;
    for (let i = 0; i < allSelects.length; i++) {
      deletedCount += await moveTasks(
        Todo,
        Recycle,
        allSelects[i].selectid,
        allSelects[i].taskids,
        req.user._id
      );
    }
    if (deletedCount > 0) {
      const todos = await Todo.find({ user: req.user._id });
      return res.json({ data: todos, deletedCount });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err.message, deletedCount: 0 });
  }
});

Router.post("/api/todos/archive", isLoggedIn, async (req, res) => {
  const { allSelects } = req.body;
  // console.log('reg',req.body);

  try {
    let deletedCount = 0;
    for (let i = 0; i < allSelects.length; i++) {
      deletedCount += await moveTasks(
        Todo,
        Archive,
        allSelects[i].selectid,
        allSelects[i].taskids,
        req.user._id
      );
    }
    if (deletedCount > 0) {
      const todos = await Todo.find({ user: req.user._id });
      return res.json({ data: todos, deletedCount });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err.message, deletedCount: 0 });
  }
});
Router.post("/api/todos/remind", isLoggedIn, async (req, res) => {
  const { docid, _id } = req.body;
  // console.log('reg',req.body);

  try {
    let deletedCount = 0;
    deletedCount += await moveTasks(Todo, Reminder, docid, [_id]);
    if (deletedCount > 0) {
      const todos = await Todo.find({});
      return res.json({ data: todos, deletedCount });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err.message, deletedCount: 0 });
  }
});

// Check task the needs to be reminded every minutes
cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
  activateDueTasks(Todo, Reminder, userid);
});

module.exports = Router;
