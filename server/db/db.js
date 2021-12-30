const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
