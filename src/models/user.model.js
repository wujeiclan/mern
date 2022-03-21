const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    user_name : String,
    user_email : String,
    user_type : {type:NUmber, default:1},
    user_pwd : String,
},{
    timestamps:true
})
