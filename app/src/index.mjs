import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const DbInit = (() => {
  /**
   * @type {import('mongodb').Db}
   **/
  let db;

  return async () => {
    if (!db) {
      const client = new MongoClient("mongodb://modex98:password@mongodb:27017"); // inside the container
      // const client = new MongoClient("mongodb://modex98:password@localhost:27017");
      await client.connect();
      db = client.db("user-account");
    }
    return db;
  };
})();

const getUsers = async () => {
  return (await DbInit()).collection("users").find({}).toArray();
};

const saveUser = async (data) => {
  const db = await DbInit();
  return db.collection("users").insertOne(data);
};

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", urlencodedParser, async (req, res) => {
  await saveUser(req.body);

  res.redirect("/");
});

app.get("/users", async (_, res) => {
  const users = await getUsers();
  res.json(users);
});

app.listen(3000, () => {
  console.log("App listening on 3000! check http://localhost:3000");
});
