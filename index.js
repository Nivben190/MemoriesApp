//config
const express = require('express');
require('dotenv').config();
const app =express();
const cookieParser = require('cookie-parser');

const cors= require('cors');
const connectionToMongo=require('./server/db')
const userRouthes= require("./server/routes/users");
const authRouthes= require("./server/routes/auth");
const notesRouthes= require("./server/routes/notes");
const notessRouthes= require("./server/routes/getusers");
const getnotessRouthes= require("./server/routes/getallnotes");

app.use('/some-route', require(path.join(__dirname, 'api', 'routes', 'route.js')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  })
}
//midleware
app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(cookieParser()); // Add this after you initialize express.

app.use("/api/users",userRouthes);
app.use("/api/notes",notesRouthes);
app.use("/api/auth",authRouthes);
app.use("/api/getusers",notessRouthes);
app.use("/api/getallnotes",getnotessRouthes);
app.use('/uploads',express.static("uploads"))
//connect to mongo
connectionToMongo();


//init app

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server started in ${port}`);
})


const imageRouter=require('./server/routes/uploads')
app.use('/images',imageRouter)

