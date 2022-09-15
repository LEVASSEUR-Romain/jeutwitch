const returnFilm = require("./jeu/cinema/returnFilm");
const wsGestionMessage = async (buffer, ws) => {
  const message = buffer.toString("utf8");
  console.log(message);
  if (message === "changeFilm") {
    const film = await returnFilm();
    ws.send(film);
  }
};
module.exports = wsGestionMessage;
