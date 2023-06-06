const pedidos = require('../../data/pedidos.json')
const httpStatusCodes = require('http2').constants;

const getPedidos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(pedidos)
}
const buscarPedidoPorid = (req, res) => {
    const { id } = req.params
    const pedido = pedidos.find((v) => v.id == id)
  
    if (pedido) {
      res.json(pedido)
    } else {
      res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({ error: 'pedido no encontrado' })
    }
  }
   buscarPedidoPorNombre = (req, res) => {
    const { nombre } = req.params
    const pedido = pedidos.find((v) => v.id == id)
  
    if (pedido) {
      res.json(pedido)
    } else {
      res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({ error: 'pedido no encontrado' })
    }

  }

const borrarPedido= (req,res) => {
  const { id } = req.params;
  const index = pedidos.findIndex(r => r.id == id);

  if (index !== -1) {
    pedidos.splice(index, 1);
    res.sendStatus(httpStatusCodes.HTTP_STATUS_NO_CONTENT);
  } else {
    res.status(404).json({ error: 'pedido no encontrado' });
  }
}


module.exports = {getPedidos,
buscarPedidoPorid,
borrarPedido,
buscarPedidoPorNombre,
}