const listMot = require("../../jeu/motus/listMot");
const deleteAccent = require("../deleteAccent/deleteAccent");
const isIncludeInList = (word) => {
  const wordNotAccent = deleteAccent(word);
  const result = listMot.filter((e) => {
    return deleteAccent(e) === wordNotAccent;
  });
  if (result.length === 0) return false;
  return true;
};
module.exports = isIncludeInList;
