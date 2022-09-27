module.exports = randomInt = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
