const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi I am doing great");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Felix");
});

app.listen(5007, () => {
  console.log("server is running now now .....");
});