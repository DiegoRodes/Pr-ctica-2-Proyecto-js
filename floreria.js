const floreria = require ("mongoose");
const { type } = require("os");

const url_bd = "mongodb://localhost:27017/FLORERIA"

floreria.connect(url_bd)


.then(() => {
    console.log("La conexión es correcta")
})
.catch((err) => {
    console.log("La conexión es incorrecta")
})

const esquema_flor = new floreria.Schema
({
    nombre:{
        type:String
    },
    color:{
        type:String
    },
    tamaño:{
        type:String
    },
    epoca:{
        type:String
    },
    longevidad:{
        type:String
    },
})

const modelo_flor = new mongoose.model
("Tabla de datos",esquema_flor)

modelo_flor.create({
    nombre: "Rosa",
    color: "Rojo",
    tamaño: "promedio",
    epoca: "primavera - verano",
    longevidad: "1 - 3 semanas"
})