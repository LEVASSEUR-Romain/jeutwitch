const express = require("express");
const tmi = require("tmi.js");
const app = express();
// ton mot est trop long ton mon est trop court ton mot n'existe pas, accepter les mot en moins de lettre
// interface motus => en haut les vertes que l'on connait deja
// pseudo plus visible
// peu bot qui joue aussi dans le tchat (pour aider)
//serveur ws
const wsServeur = require("./wsServeur");
const wsClientTmi = require("./wsClientTmi");
app.get("/", async function (req, res) {
  //redirection
  res.redirect("/menu");
});
// midlle where
app.use("/front", express.static(process.cwd() + "/front"));
app.use("/commun", express.static(process.cwd() + "/commun"));
// routes
app.get("/menu", function (req, res) {
  res.sendFile(process.cwd() + "/front/menu/index.html");
});
app.get("/cinema", function (req, res) {
  res.sendFile(process.cwd() + "/front/cinema/index.html");
});
app.get("/motus", function (req, res) {
  res.sendFile(process.cwd() + "/front/motus/index.html");
});
app.get("/justeprix", function (req, res) {
  res.sendFile(process.cwd() + "/front/justeprix/index.html");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
