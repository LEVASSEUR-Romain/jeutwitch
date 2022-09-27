const changeLocation = (message) => {
  if (message.statut === "get") {
    window.location.pathname = "/" + message.value;
  }
};
export default changeLocation;
