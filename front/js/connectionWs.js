const connectionWs = async () => {
  const ws = new WebSocket("ws://localhost:40510");
  const promise = new Promise((resolve, reject) => {
    ws.onopen = async function () {
      console.log("websocket is connected ...");
      ws.send("connected");
      // indique le lieu
      const lieu = window.location.pathname;
      const send = JSON.stringify({
        statut: "path",
        requete: "front",
        value: lieu.slice(1),
      });
      ws.send(send);
      resolve(ws);
    };
  });
  await promise;
  return ws;
};
export default connectionWs;
