const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');

const thoughtsSchema = new Schema({
    thoughtText: {type: String, required: true, maxLength:280},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    rections:[reaction]
});

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.rections.length;
})

const Thoughts = model('Thoughts',thoughtsSchema);

module.exports = Thoughts;