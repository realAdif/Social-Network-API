const {User, Thought,Reaction} = require('../models');

module.exports ={
    // Get all user
    getUsers(req, res) {
        User.find()
        .select('-__v')
        .then((dbUserData) => {
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Create user
    createUser(req,res){
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Delete user
    deleteUser(req,res){
        User.deleteOne({_id: req.params.userId})
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    //Update user   
    updateUser(req,res){
        User.updateOne({_id: req.params.userId},{$set: req.body})
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    addFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: { friends: req.params.friendId}},
            { new: true} 
        )
        .then((dbFriendData)=>{
            console.log(dbFriendData);
            if(!dbFriendData){
                return res.status(404).json({message: 'Can not find user, Thought as been made'})
            }
            res.status(200).json({message: 'Your friend as been Added', user: dbFriendData } )

        })
        .catch((err) => res.status(500).json(err));

    }
}