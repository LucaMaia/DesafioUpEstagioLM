const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    nomeLivro: {
        type: String,
        require: true,
    },
    autorLivro: {
        type: String,
        require: true,
    },
    dataPublicacao:{
        type: Date,
        require: true,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;