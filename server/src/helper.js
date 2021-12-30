const fetchDocs = async (document, userid) => {
  try {
    return await document.find({ user: userid });
  } catch (err) {
    return null;
  }
};

const validateInputs = (data) => {
  const dataKeys = Object.keys(data);
  return dataKeys.every(
    (key) => data[key] !== undefined && data[key] !== null && data[key] !== ""
  );
};

const addDoc = async (Document, data) => {
  try {
    const response = await new Document(data);
    return await response.save();
  } catch (err) {
    return false;
  }
};

const fetchDocById = async (document, docid, userid) => {
  try {
    return await document.find({ _id: docid, user: userid });
  } catch (err) {
    return null;
  }
};

const fetchTaskById = async (document, docid, taskid, userid) => {
  // console.log({docid,taskid});
  try {
    return await document.find(
      { _id: docid, user: userid },
      { tasks: { $elemMatch: { _id: taskid } } }
    );
  } catch (err) {
    return null;
  }
};

const func_alreadyAddedTasksToday = async (document, userid) =>
  await document.exists({
    date: new Date().toLocaleDateString(),
    user: userid,
  });

const addTask = async (document, task, userid) => {
  try {
    return await document.findOneAndUpdate(
      { date: new Date().toLocaleDateString(), user: userid },
      {
        $push: { tasks: task },
      }
    );
  } catch (err) {
    return null;
  }
};

const updateTask = async (document, docid, taskid, fields, userid) => {
  try {
    return await document.updateOne(
      { _id: docid, user: userid, "tasks._id": taskid },
      {
        $set: {
          "tasks.$.title": fields.title,
          "tasks.$.description": fields.description,
          "tasks.$.date": fields.date,
        },
      }
    );
  } catch (err) {
    return null;
  }
};

const docHasOneTask = async (document, docid, userid) => {
  const doc = await fetchDocById(document, docid, userid);
  return doc[0].tasks.length === 1;
};
const deleteTask = async (document, docid, taskid, userid) => {
  try {
    if (await docHasOneTask(document, docid, userid))
      return await document.findOneAndDelete({ _id: docid, user: userid });
    return await document.findOneAndUpdate(
      {
        _id: docid,
        user: userid,
      },
      {
        $pull: {
          tasks: { _id: taskid },
        },
      }
    );
  } catch (err) {
    // console.log('Got here instead',err);
    return null;
  }
};

const deleteTasks = async (document, docid, taskids, userid) => {
  let deletedCount = 0;
  for (let i = 0; i < taskids.length; i++) {
    const response = await deleteTask(document, docid, taskids[i], userid);
    if (response != null) deletedCount++;
  }
  return deletedCount;
};

const moveTasks = async (fromdoc, todoc, todoid, taskids, userid) => {
  try {
    let deleteCount = 0;
    for (let i = 0; i < taskids.length; i++) {
      let taskid = taskids[i];

      //extract deletedTask
      const [todoObj] = await fetchTaskById(fromdoc, todoid, taskid, userid);
      const { tasks: newtask } = todoObj;
      if (!newtask) throw new Error();

      const deletedTask = {
        date: newtask[0].date, //Auto delete date
        title: newtask[0].title,
        description: newtask[0].description,
      };

      // delete task from todo
      const todos = await fromdoc.findOne({ _id: todoid, user: userid });
      if (todos.tasks.length === 1)
        await fromdoc.findOneAndDelete({ _id: todoid, user: userid });
      else {
        await deleteTask(fromdoc, todoid, taskid, userid);
      }

      const todaysRecycles = await todoc.find({
        date: new Date().toLocaleDateString(),
      });
      //    return res.json({todaysRecycles});
      if (todaysRecycles.length > 0) {
        const response = await todoc.findOneAndUpdate(
          { _id: todaysRecycles[0]._id, user: userid },
          {
            $push: { tasks: deletedTask },
          }
        );
        // res.json({ failed: false, data: response });
        if (response) deleteCount++;
        else throw new Error();
      } else {
        const newrecycle = {
          date: new Date().toLocaleDateString(),
          user: userid,
          tasks: [deletedTask],
        };

        const addNewRecycleQuery = await new todoc(newrecycle);
        const response = await addNewRecycleQuery.save();
        if (response) deleteCount++;
        else throw new Error();
      }
    }
    return deleteCount;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

const formatDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

const getDifferenceInDays = (date1, date2) => {
  const diffInMs = Math.ceil(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
};

const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
const diffMins = (date, otherDate) =>
  parseInt((Math.abs(otherDate.getTime() - date.getTime()) / (1000 * 60)) % 60);

const activateTasks = async (Document1, Document2, { _id, tasks, user }) => {
  // const taskids = tasks.map(task => task._id)
  // const cur_date = new Date().toLocaleDateString();
  // const due_date = new Date(date).toLocaleDateString();
  // const date_diff = getDifferenceInDays(cur_date,due_date);
  for (let i = 0; i < tasks.length; i++) {
    if (new Date(tasks[i].date) - new Date() > 60000) return false;
    console.log("deleting a task");
    await moveTasks(Document1, Document2, _id, [tasks[i]._id], user);
  }

  // if(false){
  //     //Notify user a dey before execution
  // }else if(date_diff === 0){
  //     // activate task
  //     // const response = await Document.updateOne({ _id: docid, "tasks._id": _id }, {
  //     //     $set: {
  //     //          'tasks.$.completed': true,
  //     //          }
  //     // });

  // }
};

// const activateTask = async () =>{

// }

const reduceDocsToTasks = (docs, date) =>
  docs
    .reduce((prev_val, cur_val, cur_index) => prev_val.tasks)
    .filter((task) => task.date === date);

const getDueTasks = (doc, cur_date) => {
  return doc.tasks.map((task) => {
    if (task.date === cur_date) return task;
  });
};

getDueDocs = (docs, cur_date) => {
  if (docs.length === 0) return [];
  return docs.map((doc) => (doc.tasks = getDueTasks(doc, cur_date)));
};

const activateDueTasks = async (Document1, Document2, userid) => {
  console.log(userid);
  const cur_date = formatDate();

  const docs = await Document1.find({
    user: userid,
    tasks: { $elemMatch: { date: { $regex: ".*" + cur_date + ".*" } } },
  });
  console.log({ docs, cur_date });

  if (docs.length === 0) return false;
  else {
    // console.log('Activating...');
    for (let i = 0; i < docs.length; i++) {
      await activateTasks(Document1, Document2, docs[i]);
    }
    // console.log('Activated...');
  }
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.json({ loggedin: false });
}

module.exports = {
  validateInputs,
  addDoc,
  fetchDocs,
  fetchDocById,
  fetchTaskById,
  func_alreadyAddedTasksToday,
  addTask,
  updateTask,
  deleteTask,
  deleteTasks,
  moveTasks,
  activateDueTasks,
  isLoggedIn,
};
