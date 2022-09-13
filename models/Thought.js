const mongoose = require('mongoose');

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true},
    createdAt: {},
    usernmae: {type: String},
    rections:{}
});

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.rections.length;
})

const Thoughts = mongoose.model('thoughts',thoughtsSchema);

module.exports = Thoughts;