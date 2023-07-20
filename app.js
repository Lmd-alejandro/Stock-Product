const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

var app = express()
const puerto = process.env.PUERTO;

app.get('/', (req, res) =>{
    res.send('🚀Ruta INCIO')
})


app.listen(puerto,() => {
    console.log(`Run Server ${puerto}`)
})