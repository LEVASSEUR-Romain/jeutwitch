const selectMot = require("./selectMot");
const stringValidMotus = require("../../tools/stringValidMotus/stringValidMotus");
const { getStringFind, getPlay } = require("../../tools/global/global");
const listCommand = require("../../../commun/listCommand");
const config = require("../../config");
const motus = (client, { channel, tags, message, self }, ws) => {
  if (getPlay() !== "motus") return;
  // change
  if (
    tags.username.toLowerCase() === config.username.toLowerCase() &&
    message.toLowerCase() === "!change"
  ) {
    client.say(channel, `Le mot était  ${getStringFind()} , nouveau mot`);
    selectMot();
  }
  // look possibilité
  const findByList = listCommand.find((e) => e.command === listCommand);
  if (message[0] === "!" && !findByList) {
    const send = message.substring(1);
    const validString = stringValidMotus(send);
    if (validString === true) {
      client.say(
        channel,
        `@${
          tags.username
        }, Bravo avait trouver le mot : ${getStringFind()} , tu gagne 10 points`
      );
      const word = selectMot();
      ws.send(word);
    } else if (validString === false) {
      // pas bon réponse
    } else {
      validString.client = tags.username;
      validString.requete = "serveur";
      const toSend = JSON.stringify(validString);
      ws.send(toSend);
    }
  }
};

module.exports = motus;
