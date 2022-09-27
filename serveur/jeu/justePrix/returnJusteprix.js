const listPrice = require("./listPrice");
const randomInt = require("../../tools/random/randomInt");
const { setStringFind } = require("../../tools/global/global");
module.exports = returnJustePrix = (catogrie = null) => {
  let returnFunction;
  if (catogrie === null) {
    const numberRandom = randomInt(0, listPrice.length);
    setStringFind(listPrice[numberRandom].price + "");
    returnFunction = listPrice[numberRandom];
  } else {
    // categorie possible High-Tech, Bricolage, Beaute et Parfum, Jeu video, Livre, Montre, Vetement
    const findList = listPrice.filter((e) => e.categorie === catogrie);
    const numberRandom = randomInt(0, findList.length);
    setStringFind(findList[numberRandom].price + "");
    returnFunction = findList[numberRandom];
  }
  return JSON.stringify({
    statut: "changePrice",
    requete: "serveur",
    value: returnFunction,
  });
};
