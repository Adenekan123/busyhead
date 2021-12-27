const express = require('express');
const Reminder = require('../model/reminder');
const Recycle = require('../model/recycle');
const Archive = require('../model/archive');

//Helper
const {
    fetchDocs,
    fetchDocById,
    fetchTaskById,
    func_alreadyAddedTasksToday,
    addTask,
    updateTask,
    deleteTasks,
    moveTasks,
    isLoggedIn
} = require('../helper');


const Router = express.Router();

Router.get('/api/reminders', isLoggedIn, async (req, res) => {
    try{
        const todos = await fetchDocs(Reminder,req.user._id);
        res.json(todos);
    }catch(err){
        res.json({failed:true,data: []});
    }
   
});

Router.get('/api/reminders/:docid/:id', isLoggedIn, async (req, res) => {
    const {docid:todoid,id} = req.params;
    try{
        const todo = await fetchTaskById(Reminder,todoid,id,req.user._id);
        if(todo != null) return res.json({failed:false,data: todo});
        throw new Error();
        
    }catch(err){
        res.json([]);
    }
});



//Valid


Router.post('/api/reminders/archive', isLoggedIn, async (req, res) => {
    const { allSelects } = req.body;
    // console.log('reg',req.body);

    try {
        let deletedCount = 0;
        for(let i = 0; i < allSelects.length; i++) {
            deletedCount += await moveTasks(Reminder,Archive,allSelects[i].selectid,allSelects[i].taskids,req.user._id);
        }
        if(deletedCount > 0){
            const todos = await Reminder.find({user:req.user._id});  
            return res.json({data:todos, deletedCount});
        }
        
    } catch (err) {
        console.log(err);
        res.json({ error: err.message,deletedCount:0});
    }

});

Router.delete('/api/reminders/delete', isLoggedIn, async (req, res) => {
    const {allSelects} = req.body;
    let deletedCount = 0;
    try{
        for(let i = 0; i < allSelects.length; i++){
            const docid = allSelects[i].selectid;
            const taskids = allSelects[i].taskids;
             deletedCount += await deleteTasks(Reminder,docid,taskids,req.user._id);
        }
        if(deletedCount > 0){
            const reminders = await Reminder.find({user:req.user._id});  
            return res.json({data:reminders, deletedCount})
        }
        // res.json({deletedCount});
    }catch(err){
        res.json( []);
    }
});

module.exports = Router;
