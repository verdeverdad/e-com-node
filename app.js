if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const DB_URI = process.env.DB_URI
  const PORT = process.env.PORT || 3000;



const express = require("express")
const path = require("path")
const app = express()

const carrito = require('./carrito.json');
const category_info = require('./category_info.json');
const category = require('./category.json');
const comentarios = require('./comentarios.json');
const product_info = require('./product_info.json');
const productos = require('./productos.json');
app.use(express.static(__dirname + "/static"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

app.get("/carrito", (req, res)=>{
    res.send(carrito)
})
app.get("/category_info", (req, res)=>{
    res.send(category_info)
})
app.get("/category", (req, res)=>{
    res.send(category)
})
app.get("/comentarios", (req, res)=>{
    res.send(comentarios)
})
app.get("/product_info", (req, res)=>{
    res.send(product_info)
})
app.get("/productos", (req, res)=>{
    res.send(productos)
})


app.get("/otra_ruta", (req, res)=>{
    res.send("Otra ruta!!!")
});


app.listen(PORT, () => {
    console.log("Escuchando a http://localhost:" + PORT)
});
