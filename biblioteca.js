const biblioteca = require("mongoose");
const { type } = require("os");

const url_bd = "mongodb://localhost:27017/BIBLIOTECA";

biblioteca.connect(url_bd)

.then(() => {
    console.log("La conexión es correcta")
})
.catch((err) => {
    console.log("La conexión es incorrecta")
})

const esquema_libro = new biblioteca.Schema
({
    nombre:{
        type:String
    },
    autor:{
        type:String
    },
    añodepub:{
        type:Number
    },
    pasta:{
        type:String
    },
    paginas:{
        type:Number
    },
})

const modelo_libro = new mongoose.model
("tabla de datos",esquema_libro)

modelo_libro.create({
    nombre: "Harry Potter y la piedra filosofal",
    autor: "J.K Lowning",
    añodepub: 1997,
    pasta: "Blanda",
    paginas: 264
})