const {User, Thoughts} = require('../models');

module.exports ={
    getUsers(req,res){
        User.find()
        .then((user)=> res.json(user))
        console.log("This work")
        .catch((err) => res.status(500).json(err));
    },
    createUser(req,res){
        User.create(req.body)
        .thrn((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    }
}