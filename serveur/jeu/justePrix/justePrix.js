const returnJustePrix = require("./returnJusteprix");
const stringValidJustePrix = require("../../tools/stringValidJustePrix/stringValidJustePrix");
const { getStringFind, getPlay } = require("../../tools/global/global");
const listCommand = require("../../../commun/listCommand");
const config = require("../../../config/config");
const justePrix = (client, { channel, tags, message, self }, ws) => {
  if (getPlay() !== "justeprix") return;
  // change
  if (
    tags.username.toLowerCase() === config.username.toLowerCase() &&
    message.toLowerCase() === "!change"
  ) {
    client.say(
      channel,
      `Le prix de l'article était  ${getStringFind()} , nouvelle article !`
    );
    const article = returnJustePrix();
    ws.send(article);
  }
  const findByList = listCommand.find((e) => e.command === listCommand);
  if (message[0] === "!" && !findByList) {
    const send = message.substring(1);
    const validString = stringValidJustePrix(send);
    if (validString === true) {
      client.say(
        channel,
        `@${
          tags.username
        }, Bravo avait le prix de l'article : ${getStringFind()} , tu gagne 10 points`
      );
      const article = returnJustePrix();
      ws.send(article);
    } else if (validString === false) {
      // pas bon réponse
    } else {
      console.log("send");
      ws.send(JSON.stringify(validString));
    }
  }
};
module.exports = justePrix;
