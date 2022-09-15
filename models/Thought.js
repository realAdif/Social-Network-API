const mongoose = require('mongoose');

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, maxLength:280},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    rections:{}
});

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.rections.length;
})

const Thoughts = mongoose.model('thoughts',thoughtsSchema);

module.exports = Thoughts;