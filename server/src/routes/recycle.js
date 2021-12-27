const express = require('express');
const Router = express.Router();

const Recycle = require('../model/recycle');
const Todo = require('../model/todo');

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


Router.get('/api/recycles',isLoggedIn, async (req, res) => {
    try{
        const recycles = await fetchDocs(Recycle,req.user._id);
        res.json(recycles);
    }catch(err){
        res.json([]);
    }
});

Router.get('/api/recycles/:docid/:id', isLoggedIn, async (req, res) => {
    const {docid:todoid,id} = req.params;
    try{
        const todo = await fetchTaskById(Recycle,todoid,id,req.user._id);
        if(todo != null) return res.json({failed:false,data: todo});
        throw new Error();
        
    }catch(err){
        res.json([]);
    }
});


//Valid
Router.post('/api/recycles/restore',isLoggedIn, async (req, res) => {

    const {allSelects} = req.body;
    try {
        let updatedCount = 0;
        for(let i=0; i < allSelects.length; i++) {
            updatedCount += await moveTasks(Recycle,Todo,allSelects[i].selectid,allSelects[i].taskids,req.user._id);
        }
        if(updatedCount > 0){
            const recycles = await Recycle.find({user:req.user._id});  
            return res.json({data:recycles, updatedCount})
        }
        else throw new Error()

    } catch (err) {
        console.log(err);
        res.json({failed:true, data:null, error: err.message });
    }

});

//Multiple delete
Router.delete('/api/recycles/delete', isLoggedIn, async (req, res) => {
    const {allSelects} = req.body;
    let deletedCount = 0;
    try{
        for(let i = 0; i < allSelects.length; i++){
            const docid = allSelects[i].selectid;
            const taskids = allSelects[i].taskids;
             deletedCount += await deleteTasks(Recycle,docid,taskids,req.user._id);
        }
        if(deletedCount > 0){
            const recycles = await Recycle.find({user:req.user._id});  
            return res.json({data:recycles, deletedCount})
        }
        // res.json({deletedCount});
    }catch(err){
        res.json( []);
    }
});













module.exports =  Router;