const express = require("express");
const Draft = require("../model/draft");
const Todo = require("../model/todo");

//Helper
const {
  fetchDocs,
  fetchDocById,
  fetchTaskById,
  func_alreadyAddedTasksToday,
  addTask,
  updateTask,
  deleteTask,
  deleteTasks,
  moveTasks,
  isLoggedIn,
} = require("../helper");

const Router = express.Router();

Router.get("/api/drafts", isLoggedIn, async (req, res) => {
  try {
    const drafs = await fetchDocs(Draft, req.user._id);
    res.json(drafs);
  } catch (err) {
    res.json([]);
  }
});

//Multiple delete
Router.delete("/api/drafts/delete", isLoggedIn, async (req, res) => {
  const { allSelects } = req.body;
  let deletedCount = 0;
  try {
    for (let i = 0; i < allSelects.length; i++) {
      const docid = allSelects[i].selectid;
      const taskids = allSelects[i].taskids;
      deletedCount += await deleteTasks(Draft, docid, taskids, req.user._id);
    }
    const drafts = await Draft.find({ user: req.user._id });
    res.json({ data: drafts, deletedCount });
  } catch (err) {
    res.json([]);
  }
});

Router.get("/api/drafts/:docid/:id", isLoggedIn, async (req, res) => {
  const { docid: todoid, id } = req.params;
  try {
    const todo = await fetchTaskById(Draft, todoid, id, req.user._id);
    if (todo != null) return res.json({ failed: false, data: todo });
    throw new Error();
  } catch (err) {
    res.json([]);
  }
});

//add one
Router.post("/api/draft/add", isLoggedIn, async (req, res) => {
  const { title, description, reminderdate: date } = req.body;

  const newTask = { title, description, date };

  const newDraft = {
    user: req.user._id,
    tasks: [newTask],
  };

  try {
    const alreadyAddedTasksToday = await func_alreadyAddedTasksToday(
      Draft,
      req.user._id
    );
    if (alreadyAddedTasksToday) {
      const response = await addTask(Draft, newTask, req.user._id);
      return res.json(response);
    } else {
      const query = await new Draft(newDraft);
      const response = await query.save();
      res.json(response);
    }
  } catch (err) {
    console.log(err);
  }
});

//Valid
Router.post("/api/drafts/add", isLoggedIn, async (req, res) => {
  const { allSelects } = req.body;

  try {
    let deletedCount = 0;
    for (let i = 0; i < allSelects.length; i++) {
      deletedCount += await moveTasks(
        Draft,
        Todo,
        allSelects[i].selectid,
        allSelects[i].taskids,
        req.user._id
      );
    }
    if (deletedCount > 0) {
      const todos = await Draft.find({ user: req.user._id });
      return res.json({ data: todos, deletedCount });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err.message, deletedCount: 0 });
  }
});

Router.post("/api/drafts/update", isLoggedIn, async (req, res) => {
  const { docid, id, title, description, date } = req.body;
  try {
    const response = await updateTask(
      Draft,
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

module.exports = Router;
