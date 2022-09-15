const { Schema, model } = require('mongoose');

const userScheam = new Schema(
    {
        username: {type: String, required: true, unique:true},
        email: {type: String, required: true},
        thoughts: [{type: Schema.Types.ObjectId, ref:'Thoughts'}],
        friends: [{type: Schema.Types.ObjectId, ref:'User'}]
    },
    {
        toJSON:{virtuals: true},
        id: false,
    }
);

userScheam.virtual('friendCount').get(function(){
    return this.friends.length;
})


const User = model('User', userScheam);

module.exports = User;