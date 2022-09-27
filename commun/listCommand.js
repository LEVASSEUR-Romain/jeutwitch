const listCommand = [
  {
    command: "!quizfilm",
    type: "route",
    description: "Soyez prét a trouver l'affiche du film",
    value: "cinema",
    admin: true,
  },
  {
    command: "!quizmotus",
    type: "route",
    description: "Soyez prét a trouver le mot",
    value: "motus",
    admin: true,
  },
  {
    command: "!quizprice",
    type: "route",
    description: "Soyez prét a trouver le prix de l'article",
    value: "justeprix",
    admin: true,
  },
  {
    command: "!quiz",
    global: true,
    description:
      "quiz cinema : !quizcinema, quiz motus : !quizmotus, quiz justePrix : !quizprice",
    admin: true,
  },
  {
    command: "!change",
    admin: true,
  },
  {
    command: "!help",
    global: true,
    description: [
      {
        value: "motus",
        description: "Trouver le mots en tapant ! mot",
      },
      {
        value: "cinema",
        description:
          "Trouver le nom de l'affiche du film essayer en tapant !nom du film",
      },
      {
        value: "justeprix",
        description: "Trouver le prix de l'article",
      },
    ],
  },
  {
    command: "!admin",
    global: true,
    description:
      "changer de jeu !quizfilm , !quizmotus, !change change la question",
    admin: true,
  },
];

module.exports = listCommand;
