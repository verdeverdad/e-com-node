
const express = require("express")
const app = express();
const port = 3000

app.get("/", (req, res)=>{
    res.send("Servidor funcionando!!!")
});

app.get("/otra_ruta", (req, res)=>{
    res.send("Otra ruta!!!")
});


app.listen(port, ()=>{
    console.log("Escuchando a http://localhost:" + port)
});

let elNombre = require("./nombre.js")

console.log(elNombre);