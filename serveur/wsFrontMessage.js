const returnFilm = require("./jeu/cinema/returnFilm");
const selectMot = require("./jeu/motus/selectMot");
const returnJustePrix = require("./jeu/justePrix/returnJusteprix");
const { setPlay } = require("./tools/global/global");
const wsFrontMessage = async (message, ws) => {
  if (message.statut === "film" && message.value === "change") {
    const film = await returnFilm();
    ws.send(film);
  }
  if (message.statut === "motus" && message.value === "change") {
    const word = selectMot();
    ws.send(word);
  }

  if (message.statut === "justeprix" && message.value === "change") {
    const article = returnJustePrix();
    ws.send(article);
  }
  if (message.statut === "path") {
    setPlay(message.value);
  }
};
module.exports = wsFrontMessage;
