import connectionWs from "/front/js/connectionWs.js";
import changeLocation from "/front/js/changeLocation.js";
// connection ws
const ws = await connectionWs();
// Const
const img = document.querySelector("img");
const urlimg = "http://cinequiz.fb.free.fr/php/imagejeu.php?id=";
const receviedFilm = "changeFilm";
if (img.attributes.src.value === "") {
  const send = JSON.stringify({
    statut: "film",
    requete: "front",
    value: "change",
  });
  ws.send(send);
}
ws.onmessage = function (ev) {
  const message = JSON.parse(ev.data);
  if (message.statut === receviedFilm) {
    img.src = urlimg + message.id;
  }
  // change menu
  changeLocation(message);
};
