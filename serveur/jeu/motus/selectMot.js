const listMot = require("./listMot");
const { setStringFind, getStringFind } = require("../../tools/global/global");
const randomInt = require("../../tools/random/randomInt");
const selectMot = () => {
  const tailleList = listMot.length;
  const motRandom = randomInt(0, tailleList);
  setStringFind(listMot[motRandom]);
  return JSON.stringify({
    statut: "changeMot",
    requete: "serveur",
    value: listMot[motRandom],
  });
};
module.exports = selectMot;
