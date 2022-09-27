const stringValidMotus = require("./stringValidMotus");
const { setStringFind } = require("../../tools/global/global");

test("stringValidMotus false", () => {
  setStringFind("ooooo");
  const send = "Abaissable";
  expect(stringValidMotus(send)).toEqual(false);
});

test("stringValidMotus true", () => {
  setStringFind("Abaissable");
  const send = "Abaissable";
  expect(stringValidMotus(send)).toEqual(true);
});

test("stringValidMotus false empty seek", () => {
  setStringFind("");
  const send = "Abaissable";
  expect(stringValidMotus(send)).toEqual(false);
});

test("stringValidMotus trop de lettre", () => {
  setStringFind("tout");
  const send = "totoeaeazza";
  expect(stringValidMotus(send)).toEqual(false);
});

test("stringValidMotus pas dans la liste", () => {
  setStringFind("Abaissable");
  const send = "oooooooooo";
  expect(stringValidMotus(send)).toEqual(false);
});

test("stringValidMotus trouver position", () => {
  setStringFind("abdominaux");
  const send = "Abaissable";
  expect(stringValidMotus(send)).toEqual({
    statut: "clientSend",
    requete: "serveur",
    value: [
      { lettre: "a", color: "green" },
      { lettre: "b", color: "green" },
      { lettre: "a", color: "red" },
      { lettre: "i", color: "yellow" },
      { lettre: "s", color: "red" },
      { lettre: "s", color: "red" },
      { lettre: "a", color: "yellow" },
      { lettre: "b", color: "red" },
      { lettre: "l", color: "red" },
      { lettre: "e", color: "red" },
    ],
  });
});

/* test("stringValidMotus anopsefr", () => {
  setStringFind("tout");
  const send = "toto";
  expect(stringValidMotus(send)).toEqual({
    statut: "clientSend",
    requete: "serveur",
    value: [
      { lettre: "t", color: "green" },
      { lettre: "o", color: "green" },
      { lettre: "t", color: "yellow" },
      { lettre: "o", color: "red" },
    ],
  });
}); */
