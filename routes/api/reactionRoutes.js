const router = require('express').Router();
const {createReaction,deleteReactions} = require('../../controllers/reactionControllers');

router.route("/:thoughtId").post(createReaction);
router.route("delete/:thoughtId").delete(deleteReactions)

module.exports = router;