const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

var app = express()
const puerto = process.env.PUERTO;

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda_ropa',
});

conexion.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("!Conexion exitosa a la base de datos!")
    }
});



app.get('/', (req, res) =>{
    res.send('🚀Ruta INCIO')
})

app.get('/api/cliente/:id', (req,res) => {
    conexion.query('SELECT * FROM cliente WHERE id = ?', [req, params.id], (error, filas) => {
        if (error){
            throw error;
        }
        else{
            res.send(filas);
        }
    })
});

app.listen(puerto,() => {
    console.log(`Run Server ${puerto}`)
})