const express = require('express')
const Contenedor = require('contenedor')
const { Router } = express


const app = express()
const routerProductos = Router()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.static('public'))

routerProductos.get('/productos', (req, resp) => {
    const contenedor = new Contenedor('./productos.txt')
    const productos = contenedor.getAll()
    console.log(productos)
    resp.json({
        productos
    })
})

// routerProductos.post('/', () => ())
app.use('/productos', routerProductos)


app.get('/productosRandom', async (req, resp) => {
    const contenedor = new Contenedor('./productos.txt')

    const producto = await contenedor.getByIdRandom()
    resp.send({
        producto
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port 8080')
})
 

