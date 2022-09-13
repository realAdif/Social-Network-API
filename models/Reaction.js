const mongoose = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {},
    reactionBody: {type: String, required: true},
    username: {type: String,required:true},
    createdAt: {}
})