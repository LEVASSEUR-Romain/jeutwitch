import changeLocation from "/front/js/changeLocation.js";
import connectionWs from "/front/js/connectionWs.js";

// connection ws
const ws = await connectionWs();
const img = document.querySelector(".imgArticle");
const describe = document.getElementById("describe");
const prix = document.getElementById("prix");
// default prix
let prixMin = 0;
let prixMax = 99999;
prix.innerText = "Fourchette de prix :[" + prixMin + "," + prixMax + "]";
const receviedActicle = "changePrice";

if (img.attributes.src.value === "") {
  const send = JSON.stringify({
    statut: "justeprix",
    requete: "front",
    value: "change",
  });
  ws.send(send);
}
ws.onmessage = function (ev) {
  const message = JSON.parse(ev.data);
  if (message.statut === receviedActicle) {
    img.src = message.value.image;
    describe.innerText =
      message.value.categorie + " :" + message.value.describe;
  }
  if (message.statut === "clientSend") {
    if (message.value.up && prixMin < message.value.price)
      prixMin = message.value.price;
    if (!message.value.up && prixMax > message.value.price)
      prixMax = message.value.price;
    prix.innerText = "Fourchette de prix :[" + prixMin + "," + prixMax + "]";
  }

  // change menu
  changeLocation(message);
};
