const returnFilm = require("./returnFilm");
const { getFindFilm } = require("../../tools/global/global");
const stringValidSome = require("../../tools/stringValidSome/stringValidSome");

const cinema = async (client, { channel, tags, message, self }, ws) => {
  /*  if (self) return; */
  // message help
  if (message.toLowerCase() === "!help") {
    client.say(channel, `@${tags.username}, Trouver l'affiche du film`);
  }
  // on look les possibilité
  const validString = stringValidSome(message);
  if (validString === true) {
    client.say(
      channel,
      `@${
        tags.username
      }, Bravo le film était bien : ${getFindFilm()} , tu gagne 10 points`
    );
    const film = await returnFilm();
    ws.send(film);
  } else if (validString === false) {
    // pas bon réponse
  } else {
    client.say(channel, `@${tags.username}, Presque indice: ${validString}`);
  }
  // activé les réponse viewers
  // aide pour completer le nom du film
  // vérifier si viewer a gagner
  // mettre les points au viewer
};
module.exports = cinema;
