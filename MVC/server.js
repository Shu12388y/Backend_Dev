const express = require("express");
const PORT = 3000;
const app = express();

const homePage = require("./routes/homepage");
const {errorController}=require("./controller/homeController")
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public/css/style.css"));
app.use(homePage);


app.use("/",errorController)
// listen to port express

app.listen(PORT, () => {
  console.log("server is on");
});
