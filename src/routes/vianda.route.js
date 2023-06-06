const {Router} = require('express')
const controller = require('../controllers/vianda.controller')
const route = Router()

route.get("/", controller.getViandas)
route.get("/:codigo",controller.getViandaoByID)
route.put("/:codigo",controller.editarVianda)


module.exports = route