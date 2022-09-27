const listCommand = require("../../../commun/listCommand");
const config = require("../../../config");
const { getPlay } = require("../../tools/global/global");
const commandGlobal = (client, { channel, tags, message, self }, ws) => {
  const findCommand = listCommand.find(
    (e) => e.global && e.command === message.toLowerCase()
  );
  if (findCommand) {
    if (
      findCommand.hasOwnProperty("admin") &&
      findCommand.admin &&
      tags.username.toLowerCase() === config.username.toLowerCase()
    ) {
      client.say(channel, findCommand.description);
    } else {
      if (Array.isArray(findCommand.description)) {
        const findDescribe = findCommand.description.find(
          (e) => e.value === getPlay()
        );
        if (findDescribe) {
          client.say(channel, findDescribe.description);
        }
      } else {
        client.say(channel, findCommand.description);
      }
    }
  }
};
module.exports = commandGlobal;
