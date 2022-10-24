const http = require("http")
const PORT = 7000
const server = http.createServer((req, res) => {

    const url = req.url

    if (url === "/") {
        res.write(`
        <!DOCTYPE html>
        <html lang="en"> 
        <head><meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <title>Desafio 2</title> 
        </head> 
        <body>`)
        res.write(`
        <form action="/bienvenida" method="post">
         <label>Ingrese su nombre</label>
         <input type="text" name="nombreUsuario" id="title" />
         <input type="submit" value="ENVIAR" />
        </form>`)
        res.write(`</body> </html>`)
    }
    if (url === "/bienvenida") {
        res.write(`
        <!DOCTYPE html>
        <html lang="en"> 
        <head><meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <title>Desafio 2</title> 
        </head> 
        <body>`)
        res.write(`
      <h1> Bienvenid@ </h1>`)
        res.write(`</body> </html>`)
    }
    return res.end()

})





server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})
