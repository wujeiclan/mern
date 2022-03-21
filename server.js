const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 7777; // Porta local predefinida para o servidor
app.use(cors()); // Para informar quais domínios podem estar consumindo dados dessa API
app.use(cookieParser()); // Para trabalhar com cookies do dispositivo
app.use(express.json()); // Para enviar e receber .json entre FrontEnd e BackEnd

app.get('/', function(req, res){
    res.json({message: 'Allan aqui'});
} );

app.listen(port, function(){
    console.log(`Servidor funcionando meu caríssimo ${port}`)
})