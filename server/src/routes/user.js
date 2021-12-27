const express = require("express");
const bcrypt = require("bcrypt");

//Model
const User = require("../model/user");

const Router = express.Router();

//Helper
const { fetchDocs, validateInputs, addDoc } = require("../helper");

//add user
Router.post("/api/user", async (req, res) => {
  if (!validateInputs(req.body))
    return res.json({ error: "Invalid input detected" });
  try {
    const hashpassword = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashpassword;
    const response = await addDoc(User, req.body);
    res.json(response);
  } catch (err) {
    res.json({ error: err.message });
    console.log(err);
  }
});

Router.get("/api/profile", async (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

//get user
// Router.get('/api/user/:id',(req,res)=>{

// });

//delete user

//update user

// login user

module.exports = Router;
