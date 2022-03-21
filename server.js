const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express(); // Define e chama a aplicação toda
const port = process.env.PORT || 7777; // Porta local predefinida para o servidor

// Conexão com a Base de Dados aqui, tanto local quanto em nuvem
mongoose.connect('mongodb+srv://oraculum.zlgza.mongodb.net',{
    //useUnifiedTopology: true,
    //useNewUrlParser: true,
    //useFindAndModify: false
},function(err){
    if(err){
        console.log(err)
        } else {
            console.log('Oraculum remoto conectado com succeso, é isso aí Allan!')
        }
    })

app.use(cors()); // Para informar quais domínios podem estar consumindo dados dessa API
app.use(cookieParser()); // Para trabalhar com cookies do dispositivo
app.use(express.json()); // Para enviar e receber .json entre FrontEnd e BackEnd
app.use(routes); // Facilita e concentra o endereçamento de rotas de toda aplicação

app.listen(port, function(){
    console.log(`Servidor funcionando meu caríssimo! Na porta: ${port}`)
})