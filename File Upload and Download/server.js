const express = require("express");
const app = express();
const port = 3000;




// routes
const route = require("./routes/route");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(route);

app.listen(port, () => {
  console.log("server is on");
});
