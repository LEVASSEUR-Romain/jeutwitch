const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:40510");
const { getClientTwitch } = require("./tools/global/global");
const commandGlobal = require("./jeu/commandGlobal/commandGlobal");
const connectTwitch = require("./connectTwitch");
const cinema = require("./jeu/cinema/cinema");
const motus = require("./jeu/motus/motus");
const justePrix = require("./jeu/justePrix/justePrix");
const rooting = require("./jeu/rooting/rooting");

ws.onopen = async function () {
  await connectTwitch();
  const client = getClientTwitch();
  client.on("message", async (channel, tags, message, self) => {
    rooting(client, { channel, tags, message, self }, ws);
    commandGlobal(client, { channel, tags, message, self }, ws);
    await cinema(client, { channel, tags, message, self }, ws);
    motus(client, { channel, tags, message, self }, ws);
    justePrix(client, { channel, tags, message, self }, ws);
  });
  console.log("websocket is connected on serveur");
  ws.send("connection");
};

/* ws.onmessage = function (ev) {
  console.log(ev.data, "client ws");
}; */
