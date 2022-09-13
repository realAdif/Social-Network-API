const mongoose = require('mongoose');

const userScheam = new mongoose.Schema({

    username: {type: String, required: true},
    email: {type: String, required: true},
    thoughts: {},
    friends: {}

});
const User = mongoose.model('user', userScheam);

module.exports = User;