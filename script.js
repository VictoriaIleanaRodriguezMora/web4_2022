// Crea una pequeña página dinámica
// Logra hacer una muy simple página con los siguientes requisitos:

// Debe haber al menos 2 páginas (ej: inicio y contacto)
// Cada página debe tener:
// Título para cada página (Debe ser variable configurada en index.js)
// Enlaces de navegación para navegar entre las 2 páginas
// En 'inicio' un simple párrafo comentando "Aprendiendo a hacer páginas dinámicas con NodeJS"
// En 'contacto' agregar un enlace que indique tu e-mail para contactarse
// No mucho más que eso, si queres podes agregar css, bootstrap, pero es totalmente opcional, lo importante es que logres crear la página de forma dinámica.

const express = require('express')
const app = express();
const PORT = 4000
const { engine } = require('express-handlebars'); //HANDLEBARS

const server = app.listen(PORT, () => {
    console.log(`Puerto ${server.address().port} Web 4`);
})

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
    })
);

app.get('/', function (req, res) {
    res.json({
        titulo: "Estas en la página inicial",
        mensaje: "Aprendiendo a hacer páginas dinámicas con NodeJS",
        enlace: "/contacto",
    })
})

app.get('/contacto', function (req, res) {
    res.json({
        contacto: "CONTACTO",
        msj: "victoria2013mora@gmail.com",

    })
})
