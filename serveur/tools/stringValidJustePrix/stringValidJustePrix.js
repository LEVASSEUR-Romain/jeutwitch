const { getStringFind } = require("../global/global");

module.exports = stringValidJustePrix = (send) => {
  if (!send.match(/^[0-9,.]+$/)) return false;
  let value;
  const sendFloat = parseFloat(send);
  const toFind = parseFloat(getStringFind());
  if (sendFloat === toFind) return true;
  else if (toFind > sendFloat) value = { price: sendFloat, up: true };
  else value = { price: sendFloat, up: false };

  const result = {
    statut: "clientSend",
    requete: "serveur",
    value: value,
  };
  return result;
};
