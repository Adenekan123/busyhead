const express = require('express');
const Archive = require('../model/archive');
const Todo = require('../model/todo');
const Recycle = require('../model/recycle');

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
    isLoggedIn
} = require('../helper');


const Router = express.Router();



Router.get('/api/archives', isLoggedIn,  async (req, res) => {
    try{
        const drafs = await fetchDocs(Archive);
        res.json(drafs);
    }catch(err){
        res.json( []);
    }
});

//single

Router.get('/api/archives/:docid/:id',isLoggedIn, async (req, res) => {
    const {docid:todoid,id} = req.params;
    try{
        const todo = await fetchTaskById(Archive,todoid,id,req.user._id);
        if(todo != null) return res.json({failed:false,data: todo});
        throw new Error();
        
    }catch(err){
        res.json([]);
    }
});

//multiple
Router.delete('/api/archives/delete', isLoggedIn,  async (req, res) => {
    const {allSelects} = req.body;
    let deletedCount = 0;
    try{
        for(let i = 0; i < allSelects.length; i++){
            const docid = allSelects[i].selectid;
            const taskids = allSelects[i].taskids;
            deletedCount += await deleteTasks(Archive,docid,taskids,req.user._id);
        }
            const archives = await Archive.find({user:req.user._id});  
             res.json({data:archives, deletedCount});

        
    }catch(err){
        res.json( []);
    }
});



Router.post('/api/archives/add', isLoggedIn, async (req, res) => {

    const { title, description} = req.body;

    const newTask = { title, description }

    const newDraft = {
        user:req.user._id,
        tasks: [newTask]
    }

    try {
        const alreadyAddedTasksToday = await func_alreadyAddedTasksToday(Draft,req.user._id);
        if (alreadyAddedTasksToday) {
            const response = await addTask(Archive,newTask,req.user._id);
           return res.json(response);
        } else {
            const query = await new Archive(newDraft);
            const response = await query.save();
            res.json(response);
        }

    } catch (err) {
        console.log(err)
    }

});

//Valid
Router.post('/api/archives/reset', isLoggedIn, async (req, res) => {
    const { allSelects } = req.body;

    try {
        let deletedCount = 0;
        for(let i = 0; i < allSelects.length; i++) {
            deletedCount += await moveTasks(Archive,Todo,allSelects[i].selectid,allSelects[i].taskids,req.user._id);
        }
        if(deletedCount > 0){
            const archives = await Archive.find({user:req.user._id});  
            return res.json({data:archives, deletedCount});
        }
        
    } catch (err) {
        console.log(err);
        res.json({ error: err.message,deletedCount:0});
    }

});



module.exports = Router;