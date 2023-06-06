const viandas = require('../../data/viandas.json')
const httpStatusCodes = require('http2').constants;

const getViandas = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(viandas)
}


const getViandaoByID = (req, res) => {
    const { codigo } = req.params
    const vianda = viandas.find((v) => v.codigo == codigo)
  
    if (vianda) {
      res.json(vianda)
    } else {
      res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({ error: 'vianda no encontrada' })
    }

}
const editarVianda= (req, res) => {
  const { codigo } = req.params;
  const { aptoCeliaco, stock, descripcion } = req.body;

  const vianda = viandas.find((v) => v.codigo === codigo);

  if (!vianda) {
    res.status(httpStatusCodes.NOT_FOUND).json({ error: 'vianda no encontrado' });
    return;
  }

  if (stock !== undefined) {
  vianda.stock =stock;
  }

  if (celiaco !== undefined) {
    vianda.aptoCeliaco = aptoCeliaco;
  }

  if (descripcion!== undefined) {
    vianda.descripcion = descripcion;
  }

  res.json({ message: 'vianda actualizado correctamente', Vianda });
};
module.exports = {getViandas,
  getViandaoByID,
  editarVianda,
}