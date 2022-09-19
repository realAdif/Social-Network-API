const router = require('express').Router();
const {createReaction,deleteReaction} = require('../../controllers/reactionControllers');

router.route("/:thoughtId").post(createReaction);
router.route("/delete/:thoughtId").delete(deleteReaction)

// router.route('/:thoughtId/delete/:reactionId').delete(deleteReaction);

module.exports = router;