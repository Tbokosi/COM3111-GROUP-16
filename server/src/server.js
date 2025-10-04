const express = require("express");


const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Listening on server")
})

app.listen(PORT, '0.0.0.0', ()=>{
    console.log("listenong on port: " + PORT);
})