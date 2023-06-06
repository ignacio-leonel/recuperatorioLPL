const {Router} = require('express')
const controller = require('../controllers/pedido.controller')
const route = Router()

route.get("/", controller.getPedidos)
route.get("/:id", controller.buscarPedidoPorid)
route.get("/:name",controller.buscarPedidoPorNombre)

route.delete("/:id", controller.borrarPedido)



module.exports = route