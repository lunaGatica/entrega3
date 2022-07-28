const express = require('express')
 
const app = express()

app.get('/productos', async(req,res) => {
    const listaProductos = await producto.getAll()
    res.send(listaProductos)
    
    })
   
 app.get('/productoRandom', async(req,res) => {
        const listaProductos = await producto.getAll()
        const productoRandom = listaProductos[Math.floor(Math.random()*listaProductos.length)]
        res.send(productoRandom)
         
         }) 

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log('Servidor http escuchando en el puerto ${server.address().port}')
})
server.on("error", err => console.log(err))






 

