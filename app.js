const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env" });

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello Ralph!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
module.exports = app;
