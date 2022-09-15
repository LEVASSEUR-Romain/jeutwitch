/**
 *
 * @param {string} send
 * @param {string} find
 * return false => si rien trouver
 * return true => si bonne réponse
 * return string => si presque bon
 */
const { getFindFilm } = require("../global/global");
const stringValidSome = (send) => {
  // % de réussite
  const pourcentage = 0.8;
  const sendLower = send.toLowerCase();
  const findLower = getFindFilm().toLowerCase();
  console.log(findLower);
  if (findLower === sendLower) {
    return true;
  }
  let stringReturn = "";
  for (let i = 0; i < findLower.length; i++) {
    if (findLower[i] === sendLower[i]) {
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
  if (countFail / tailleFind < pourcentage) return stringReturn;
  return false;
};
module.exports = stringValidSome;
