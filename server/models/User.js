const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profileImg : {
        type : String,
        default : 'img_url_here'
    },
    acc_type : String
    
})

module.exports = mongoose.model('users',userSchema)