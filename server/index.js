const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

//Authentication dependencies
const passport = require("passport");
// const localStrategy = require('passport-local');
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const bcrypt = require('bcrypt');

//Routes
const userRouter = require("./src/routes/user");
const todoRouter = require("./src/routes/todo");
const draftRouter = require("./src/routes/draft");
const archiveRouter = require("./src/routes/archive");
const recycleRouter = require("./src/routes/recycle");
const reminderRouter = require("./src/routes/reminder");

require("./db/db.js");
const User = require("./src/model/user");

const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const server = express();
server.use(cors(corsOptions));

//middlewares
server.use(
  session({
    secret: "verygoodsecrete",
    resave: false,
    saveUninitialized: true,
  })
);

server.use(cookieParser("verygoodsecrete"));

server.use(bodyParser.json());
server.use(express.json());

//passport
server.use(passport.initialize());
server.use(passport.session());
require("./src/passportConfig")(passport);

server.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) return res.json({ message: "No user exist" });

    req.login(user, (err) => {
      if (err) throw err;
      res.json({ message: "Successfuly Authenticated", loggedin: true });
    });
  })(req, res, next);
});

server.post("/logout", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    req.logOut();
    res.json({ loggedin: false, message: "Successfuly Logout" });
  })(req, res, next);
});

server.get("/user", (req, res, next) => {
  console.log(req.user);
  return res.json(req.user);
});

server.use(userRouter);
server.use(todoRouter);
server.use(draftRouter);
server.use(archiveRouter);
server.use(recycleRouter);
server.use(reminderRouter);

const buildPath = path.join(__dirname, "..", "dist");
server.use(express.static(buildPath));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log("listening on port 3001"));
