use gamesDB;

db.users.remove({});

db.users.insert([
  { Player: "Connor"},
  { Player: "Daniel"},
  { Player: "Brian"},
  { Player: "Ruaridh"}
]);
