const WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 40510 });

// import
const connectTwitch = require("./connectTwitch");
const cinema = require("./jeu/cinema/cinema");
const wsGestionMessage = require("./wsGestionMessage");
const { getClientTwitch } = require("./tools/global/global");
wss.on("connection", async function (ws) {
  ws.on("message", function (message) {
    wsGestionMessage(message, ws);
  });
  await connectTwitch();
  const client = getClientTwitch();
  client.on("message", async (channel, tags, message, self) => {
    const result = await cinema(client, { channel, tags, message, self }, ws);
  });
  //setInterval(() => ws.send("coucou"), 1000);
});
