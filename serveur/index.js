const express = require("express");
const ws = require("./ws");
const tmi = require("tmi.js");
const { getFindFilm } = require("./tools/global/global");
const returnFilm = require("./jeu/cinema/returnFilm");
const app = express();

app.get("/", function (req, res) {
  res.redirect("/cinema");
});

app.get("/cinema", function (req, res) {
  res.sendFile(process.cwd() + "/front/cinema/index.html");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
