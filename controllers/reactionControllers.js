const {User, Thought,Reaction} = require('../models');

module.exports = {
    // create reaction
    createReaction(req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((dbReactionData)=>{
            if(!dbReactionData){
                return res.status(404).json({message: 'Can not find user, Thought as been made'})
            }
            res.status(200).json({message: 'Your reaction as been made'})
        })
        .catch((err) => res.status(500).json(err));
    }
}