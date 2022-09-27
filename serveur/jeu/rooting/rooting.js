const config = require("../../../config");
const listCommand = require("../../../commun/listCommand");
const { setPlay } = require("../../tools/global/global");
const rooting = (client, { channel, tags, message, self }, ws) => {
  const findCommand = listCommand.find(
    (e) => e.command === message.toLowerCase() && e.type === "route"
  );
  if (
    tags.username.toLowerCase() === config.username.toLowerCase() &&
    findCommand
  ) {
    client.say(channel, findCommand.description);
    const send = JSON.stringify({
      statut: "get",
      requete: "serveur",
      value: findCommand.value,
    });
    setPlay(findCommand.value);
    ws.send(send);
  }
};
module.exports = rooting;
