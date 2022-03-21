
module.exports = {
    index(req, res){
        res.json({message: 'Allan aqui no Request e Response!'});
    },
    create(req, res){
        let msg = '';
        res.json({ msg : msg })
    }
}