const express = require("express");
const app = express();
const port = 3000;

const multer=require("multer")

const storageData=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'folder')
    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toISOString()+'-'+file.originalname);
    }
})

// routes
const route = require("./routes/route");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(multer({storage:storageData}).single('file'))
app.use(route);

app.listen(port, () => {
  console.log("server is on");
});
