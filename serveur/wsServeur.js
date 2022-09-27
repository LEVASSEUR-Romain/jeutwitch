const WebSocket = require("ws");
const WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 40510 });

// import

const wsFrontMessage = require("./wsFrontMessage");

wss.on("connection", async function (ws) {
  ws.on("message", function (message) {
    const messageUTF8 = message.toString("utf8");
    if (messageUTF8 !== "connected" && messageUTF8 !== "connection") {
      const messageJson = JSON.parse(messageUTF8);
      // message du front
      if (messageJson.requete === "front") {
        wsFrontMessage(messageJson, ws);
      }
      // message du client serveur
      if (messageJson.requete === "serveur") {
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(messageUTF8);
          }
        });
      }
    }
  });
});
