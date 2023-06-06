const {Router} = require('express')
const controller = require('../controllers/alumno.controller')
const route = Router()

route.get("/", controller.getAlumnos)
route.get("/:dni",controller.getAlumnnoByDni)
route.put("/:dni", controller.modificarAlumno)
route.post("/", controller.darAlumnoDeAlta)  /*crea un nuevo alumno*/


module.exports = route