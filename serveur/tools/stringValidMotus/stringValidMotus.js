const { getStringFind } = require("../../tools/global/global");
const listMot = require("../../jeu/motus/listMot");
const deleteAccent = require("../../tools/deleteAccent/deleteAccent");
const countLettre = require("../countLettre/countLettre");
const countColor = require("../countColor/countColor");
const isIncludeInList = require("../isIncludeInList/isIncludeInList");
const stringValidMotus = (send) => {
  if (getStringFind()) {
    const toSeek = deleteAccent(getStringFind());
    const sendClient = deleteAccent(send);
    // condition avant traitement
    // le mot est pas assez long
    if (toSeek.length !== sendClient.length) return false;
    // on a trouver la bonne réponse
    if (toSeek === sendClient) {
      return true;
    }
    // le mot ne fait pas parti de la list
    if (!isIncludeInList(sendClient)) return false;

    const colorFail = "red";
    const colorPlacement = "yellow";
    const colorWin = "green";
    const arrayResult = [];

    for (let i = 0; i < sendClient.length; i++) {
      if (toSeek.indexOf(sendClient[i]) === -1) {
        arrayResult.push({
          lettre: sendClient[i],
          color: colorFail,
        });
      } else if (sendClient[i] === toSeek[i]) {
        arrayResult.push({
          lettre: sendClient[i],
          color: colorWin,
        });
      } else {
        arrayResult.push({
          lettre: sendClient[i],
          color: colorPlacement,
        });
      }
    }

    if (arrayResult.every((e) => e.color === colorFail)) return false;
    // update color yellow
    arrayResult.forEach((elmt, index) => {
      if (elmt.color === colorPlacement) {
        const sendLettreRepetition = countLettre(sendClient, elmt.lettre);
        const seekLettreRepetition = countLettre(toSeek, elmt.lettre);
        if (sendLettreRepetition > seekLettreRepetition) {
          const countPlacement = countColor(
            arrayResult,
            colorPlacement,
            elmt.lettre
          );
          const countValid = countColor(arrayResult, colorWin, elmt.lettre);
          if (countPlacement + countValid !== seekLettreRepetition) {
            arrayResult[index].color = colorFail;
          }
        }
      }
    });

    const result = {
      statut: "clientSend",
      requete: "serveur",
      value: arrayResult,
    };
    return result;
  } else {
    return false;
  }
};
module.exports = stringValidMotus;
