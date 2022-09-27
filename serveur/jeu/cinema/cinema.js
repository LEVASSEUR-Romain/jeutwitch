const returnFilm = require("./returnFilm");
const listCommand = require("../../../commun/listCommand");
const { getStringFind, getPlay } = require("../../tools/global/global");
const stringValidSome = require("../../tools/stringValidSome/stringValidSome");
const config = require("../../../config/config");
const cinema = async (client, { channel, tags, message, self }, ws) => {
  if (getPlay() !== "cinema") return;
  if (
    tags.username.toLowerCase() === config.username.toLowerCase() &&
    message.toLowerCase() === "!change"
  ) {
    client.say(channel, `la réponse était ${getStringFind()}`);
    const film = await returnFilm();
    ws.send(film);
  }
  // on look les possibilité
  const findByList = listCommand.find((e) => e.command === listCommand);
  if (message[0] === "!" && !findByList) {
    const send = message.substring(1);
    const validString = stringValidSome(send);
    if (validString === true) {
      client.say(
        channel,
        `@${
          tags.username
        }, Bravo le film était bien : ${getStringFind()} , tu gagne 10 points`
      );
      const film = await returnFilm();
      ws.send(film);
    } else if (validString === false) {
      // pas bon réponse
    } else {
      client.say(channel, `@${tags.username}, Presque indice: ${validString}`);
    }
  }
};
module.exports = cinema;
