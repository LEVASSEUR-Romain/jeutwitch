import connectionWs from "/front/js/connectionWs.js";
import changeLocation from "/front/js/changeLocation.js";
// connection ws
const ws = await connectionWs();

// Const
const word = document.querySelector("#word");
const recivedPlayer = document.getElementById("try");

if (word.innerText === "") {
  const send = JSON.stringify({
    statut: "motus",
    value: "change",
    requete: "front",
  });
  ws.send(send);
}
//si word vide demande un mot
ws.onmessage = function (ev) {
  const message = JSON.parse(ev.data);
  if (message.statut === "changeMot") {
    word.innerText =
      "on cherche un mot en " + message.value.length + " lettres";
    recivedPlayer.innerHTML = "";
  }
  if (message.statut === "clientSend") {
    // inner html
    let add = "<div class='response'>";
    message.value.forEach((element) => {
      add +=
        "<span class='letter' style='background-color:" +
        element.color +
        ";'>" +
        element.lettre +
        "<span>";
    });
    add += "</div>";
    recivedPlayer.innerHTML += add;
    // on affiche 20 max
    //console.log(recivedPlayer);
  }
  // change menu
  changeLocation(message);
};
