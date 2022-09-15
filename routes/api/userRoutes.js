const router = require('express').Router();
const {getUsers,createUser,getSingleUser,deleteUser,updateUser} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)
router.route('/:userId').get(getSingleUser).delete(deleteUser)
router.route('/update/:userId').put(updateUser)

module.exports = router;