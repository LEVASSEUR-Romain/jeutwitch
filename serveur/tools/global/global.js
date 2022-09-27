const setStringFind = (film) => {
  global.filmToFind = film;
};
const getStringFind = () => {
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

const setPlay = (play) => {
  global.globalPlay = play;
};

const getPlay = () => {
  if (global.globalPlay) {
    return globalPlay;
  }
  return false;
};

module.exports = {
  setStringFind,
  getStringFind,
  setClientTwitch,
  isClientTwitch,
  getClientTwitch,
  getPlay,
  setPlay,
};
