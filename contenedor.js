const fs = require('fs');
class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj){ //[].length = 0 => false , pread ...[] o {} => copio al contenido
    try {
        let dataArch = await fs.promises.readFile(this.ruta, 'utf8');
        let dataArchParse = JSON.parse(dataArch)
        if (dataArchParse.length) {
        await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchParse,{ ...obj, id:dataArchParse[dataArchParse.length - 1].id + 1} ]))

    } else {
        await fs.promises.writeFile(this.ruta, JSON.stringify([ { ...obj, id:1} ], null, 2))
    }
    console.log('El archivo tiene el id: ${dataArchParse[dataArchParse.length - 1].id + 1}')
    } catch (error) {
         console.log(error)
    }

    }
    //traer por id
    async getById(id){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf8' )
            let dataArchParse = JSON.parse(dataArch)
            let producto = dataArchParse.Find(producto => producto.id == id)
            if (producto){
                return producto
                console.log(producto)
            } else {
            console.log('No se encontro el producto')
            }
            return producto
        } catch (error){
            console.log(error)
        }
    }
    //traer todos los productos
    async getAll(){
        try{
            let dataArch = await fs.promises.readFile(this.ruta, 'utf8')
            let dataArchParse = JSON.parse(dataArch)
            return dataArchParse
            console.log(dataArchParse)
        } catch (error){
            console.log(error)
        }
    }
    //eliminar producto por id
    async delete(id){
        try{
            let dataArch = await fs.promises.readFile(this.ruta, 'utf8' )
            let dataArchParse = JSON.parse(dataArch)
            let producto = dataArchParse.Find(producto => producto.id == id)  
            if (producto){
               const dataArchParseFiltrado = dataArchParse.filter(producto => producto.id !== id)
               await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchParseFiltrado, null, 2),'utf-8')
                console.log('Producto eliminado')
            } else {
                console.log('No se encontro el producto')
            }
        } catch (error){
            console.log(error)
        }
    } 
    // eliminar todos los productos
    async deleteAll(){
         await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2),'utf-8') 
        }

       async getByIdRandom(){
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            const dataParse = JSON.parse(data)
            let producto = dataParse[Math.floor(Math.random() * dataParse.length)]
            console.log(producto)
            return producto
        } catch (error){
            console.log(error)
        }
       } 
    }
    

module.exports = Contenedor