//config
const express = require('express');
require('dotenv').config();
const app =express();
const cookieParser = require('cookie-parser');
const path =require('path');
const cors= require('cors');
const connectionToMongo=require('./server/db')
const userRouthes= require("./server/routes/users");
const authRouthes= require("./server/routes/auth");
const notesRouthes= require("./server/routes/notes");
const notessRouthes= require("./server/routes/getusers");
const getnotessRouthes= require("./server/routes/getallnotes");

//midleware
app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(cookieParser()); // Add this after you initialize express.

app.use("/api/users",userRouthes);
app.use("/api/notes",notesRouthes);
app.use("/api/auth",authRouthes);
app.use("/api/getusers",notessRouthes);
app.use("/api/getallnotes",getnotessRouthes);
//connect to mongo
app.get("/api/test", (req, res) => {
    res.send("test");
  });
  
  if(process.env.NODE_ENV==="production")  app.use(express.static(path.join(__dirname, "./frontend/build")));

  
app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./frontend/build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
//init app
connectionToMongo();

const port = process.env.PORT||8080;
app.listen(port,()=>{
    console.log(`server started in ${port}`);
})


const imageRouter=require('./server/routes/uploads')
app.use('/images',imageRouter)

