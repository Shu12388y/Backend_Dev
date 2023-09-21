const express = require("express");
const session = require("express-session");
const PORT = 300;
const app = express();

const getLogin = require("./routes/route");
const postLogin = require("./routes/route");

app.use(getLogin);
app.use(postLogin);

app.listen(PORT, () => {
  console.log("server is on");
});
