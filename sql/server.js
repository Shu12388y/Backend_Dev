const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

const { homePage } = require("./controller/homePage");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", homePage);
// listen app port
app.listen(3000, () => {
  console.log("server is on");
});
