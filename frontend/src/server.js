const express = require('express');

const routes = express.Router();

routes.get('/', function (req,res){
    res.json({message: "Bem vindo ao Backend em MongoDB"})
})

routes.listen('3000')
