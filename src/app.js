const express = require('express')
const alumnosRouter = require('./routes/alumno.route')
const viandasRouter = require('./routes/vianda.route')
const pedidosRouter = require('./routes/pedido.route')
const PORT = process.env.PORT || 3103

const app = express()

app.use(express.json())

app.use('/api/alumnos', alumnosRouter),
app.use('/api/viandas', viandasRouter),
app.use('/api/pedidos', pedidosRouter),

app.listen(PORT, () => {
    console.log(`Solución del parcial en el puerto ${PORT}`)
    console.log(`Solución del parcial en el puerto ${PORT}`)
})







