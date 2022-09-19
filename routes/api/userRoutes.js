const router = require('express').Router();
const {getUsers,createUser,getSingleUser,deleteUser,updateUser,addFriend,deleteFriend} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)
router.route('/:userId').get(getSingleUser).delete(deleteUser)
router.route('/update/:userId').put(updateUser)

router.route('/:userId/friends/:friendId').post(addFriend);
router.route("/delete/:userId").delete(deleteFriend)
// router.route('/:userId/friend/:friendId').get(getSingleUser).delete();

module.exports = router;