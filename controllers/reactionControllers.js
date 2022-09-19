const {User, Thought,Reaction} = require('../models');

module.exports = {
    // create reaction
    createReaction(req,res){
        console.log("req.body", req.body)
        console.log("req.prama", req.params.thoughtId)
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
    },
    // delete reaction 

    deleteReaction(req,res){
        console.log("this working");
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId}  } },
            { new: true },
          )
        .then((dbReactionData)=>{
            if(!dbReactionData){
                return res.status(404).json({message: 'Can not find reacttion'})
            }
            res.status(200).json({message: 'Your reaction as been removed'})
        })
        .catch((err) => res.status(500).json(err));
    }
}