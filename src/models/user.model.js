const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    user_name : String,
    user_email : String,
    user_type : {type:NUmber, default:1},
    user_pw : String,
},{
    timestamps:true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("user_pw")){
        return next();
    }
    this.user_pw = bcrypt.hashSync(this.user_pw,10); // Aqui é onde acontece a encriptação
    next();
});

const users = mongoose.model('users', DataSchema);
module.exports = users;