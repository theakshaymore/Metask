const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Hello there");
});

app.get("/signin", (req, res) => {
  return res.send("You are on signin page");
});
app.get("/signup", (req, res) => {
  return res.send("You are on signup page");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});
