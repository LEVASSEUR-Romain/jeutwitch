const fetch = require("node-fetch");
const { setFindFilm } = require("../../tools/global/global");
const returnFilm = async () => {
  // liens
  const urlCinema = "http://cinequiz.fb.free.fr/php/apiCinema?req=film";

  const response = await fetch(urlCinema);
  const json = await response.json();
  if (json === null || json.error) {
    return returnFilm();
  }
  json.wstype = "affiche";
  setFindFilm(json.titre);
  return JSON.stringify(json);
};
module.exports = returnFilm;
