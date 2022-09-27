/**
 *
 * @param {string} send
 * @param {string} find
 * return false => si rien trouver
 * return true => si bonne réponse
 * return string => si presque bon
 */
const { getStringFind } = require("../global/global");
const stringValidSome = (send) => {
  if (getStringFind()) {
    // gerer les accents normalise
    const pourcentageHelp = 0.8; // % de réussite avant de help
    const pourcentageWin = 0.1; // % ou on considére que c'est gagner
    const sendLower = send.toLowerCase();
    const findLower = getStringFind().toLowerCase();
    if (findLower === sendLower) {
      return true;
    }
    let stringReturn = "";
    for (let i = 0; i < findLower.length; i++) {
      if (findLower[i] === sendLower[i]) {
        stringReturn += findLower[i];
      } else if (
        findLower[i] === " " ||
        findLower[i] === "-" ||
        findLower[i] === ":" ||
        findLower[i] === "_" ||
        findLower[i] === "." ||
        findLower[i] === "'"
      ) {
        stringReturn += findLower[i];
      } else {
        stringReturn += "?";
      }
    }
    const tailleFind = findLower.length;
    let countFail = 0;
    for (let i = 0; i < stringReturn.length; i++) {
      if (stringReturn[i] === "?") {
        countFail++;
      }
    }
    const pourcentFail = countFail / tailleFind;
    if (pourcentFail < pourcentageWin) return true;
    if (pourcentFail < pourcentageHelp) return stringReturn;
    return false;
  } else {
    return false;
  }
};
module.exports = stringValidSome;
