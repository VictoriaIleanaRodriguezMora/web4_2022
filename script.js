// Consigna de desafío #4 {COMPLEMENTARIO}
// Crear una app de Express que contenga un middleware que al ejecutarse escriba el siguiente mensaje por consola(terminarl)  “Ejecutando middleware”

const express = require('express');
const app = express();
const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Puerto ${server.address().port} Web 4`);
})

app.use(function (req, res, next) {
  console.log('MIDDLEWARE A NIVEL APP ')
  next()
});
 
app.get('/', function (req, res, next) {
  res.json({mainPage: 'MAIN PAGE'}) //json
})
 
