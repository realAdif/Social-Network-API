const mongoose = require('mongoose');

const userScheam = new mongoose.Schema({

    username: {type: String, required: true, unique:true},
    email: {type: String, required: true},
    thoughts: {type: mongoose.Schema.Types.ObjectId, ref:'thoughts'},
    friends: {type: mongoose.Schema.Types.ObjectId, ref:'user'}

});

userScheam.virtual('friendCount').get(function(){
    return this.friends.length;
})


const User = mongoose.model('user', userScheam);

module.exports = User;