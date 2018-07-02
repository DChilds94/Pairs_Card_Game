const express = require("express");
const app = express();
const parser = require("body-parser");

const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("gamesDB");
    console.log("Connected to db...");

    app.get("/api/users", (req, res, next) => {
      const usersCollection = db.collection("users");
      usersCollection.find().toArray((err, users) => {
        if (err) next(err);
        res.json(users);
      });
    });

    app.post("/api/users", (req, res, next) => {
      const usersCollection = db.collection("users");
      console.log(req.body);
      const newUser = req.body;
      usersCollection.insert(newUser, (err, result) => {
        if (err) next(err);
        res.status(201);
        res.json(result.ops[0]);
      });
    });

    app.listen(port, () => {
      console.log("App listening on port", port);
    });
  }
);
