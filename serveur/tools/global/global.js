const setFindFilm = (film) => {
  global.filmToFind = film;
};
const getFindFilm = () => {
  if (global.filmToFind) {
    return filmToFind;
  }
  return false;
};

const setClientTwitch = (client) => {
  global.clientTwitch = client;
};

const isClientTwitch = () => {
  if (global.clientTwitch) {
    return true;
  }
  return false;
};

const getClientTwitch = () => {
  if (global.clientTwitch) {
    return clientTwitch;
  }
  return false;
};

module.exports = {
  setFindFilm,
  getFindFilm,
  setClientTwitch,
  isClientTwitch,
  getClientTwitch,
};
