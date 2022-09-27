/**
 *
 * @param {string} word
 * @param {string} lettre
 * @return {number}
 */

const countLettre = (word, lettre) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === lettre) {
      count++;
    }
  }
  return count;
};
module.exports = countLettre;
