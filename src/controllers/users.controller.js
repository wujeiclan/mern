const User = require('../models/user.model');

module.exports = {
    index(req, res){
        const user = User.find();
        res.json(user); // Retorna erro 200 se não encontrar o usuário
    },
    // Vamos colocar essa função em modo assíncrono para tudo ocorrer bem :)
    async create(req, res){
        const {user_name, user_email, user_type, user_pw} = req.body;

        let data = 1;

        let user = User.findOne({user_email});
        if(!user){
            data = {user_name, user_email, user_type, user_pw};
            user = await User.create(data); // Como o JS é assíncrono, temos que dizer para esta linha esperar pra checar dados antes ;)

            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }

        }
    },
    details(req, res){
        const {_id} = req.params;
        const user = User.find({_id});
        res.json(user);
    },
}
