const espress = require('express');

const routes = express.Router();

routes.get('/',function(req, res){
    res.json({message: 'Allan aqui no Request e Response!'});
});

module.exports=routes;