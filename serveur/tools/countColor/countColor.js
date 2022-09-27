/**
 *
 * @param {array} array
 * @param {string} color
 * @param {string} lettre
 * @return {Number} nombre couleur
 */

const countColor = (array, color, lettre) => {
  return array.filter((e) => {
    return e.color === color && e.lettre === lettre;
  }).length;
};
module.exports = countColor;
