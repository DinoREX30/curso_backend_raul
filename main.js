'use strict' 
//Librerias
const express = require('express')
const colors = require('colors')

//Aplicacion
const app = express()

var port = 8000

app.get('/', (req, rest) => {
    rest.send('Entraste a la ruta raiz')
})

app.get('/raul',  (req, rest) => {
    rest.send('Hola crack')
})

app.get('/info', (req, res) => {
    res.send('Algo increible esta por venir')
})

//Correr app
app.listen(port, () => {
    console.log(colors. rainbow('Felicidades tu API esta corriendo en http//localhost:8000'))
})
