const express = require("express");
const app = express();
const port = 3000;

const movies = require("./movies.json");

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/movie/list", (req, res) => {
  res.send("GET request to the homepage");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
