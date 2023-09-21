const express = require("express");
const session = require("express-session");
const PORT = 3000;
const app = express();
// const session=require("express-session")

const getLogin = require("./routes/route");
const postLogin = require("./routes/route");

app.use(
  session({
    secret: "qwjskfnfjjbdbgbdbsb",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(getLogin);
app.use(postLogin);

app.listen(PORT, () => {
  console.log("server is on");
});
