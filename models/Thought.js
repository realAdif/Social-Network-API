const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');

const thoughtsSchema = new Schema( 
    {
        thoughtText: {type: String, required: true, maxLength:280},
        createdAt: {type: Date, default: Date.now},
        username: {type: String, required: true},
        rections:[reaction]
    },
    {
        toJSON:{virtuals: true},
        id: false,
    }

);

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.rections.length;
})

const Thought = model('Thought',thoughtsSchema);

module.exports = Thought;