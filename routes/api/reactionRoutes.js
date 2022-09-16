const router = require('express').Router();
const {createReaction} = require('../../controllers/reactionControllers');

router.route("/:thoughtId").post(createReaction);

module.exports = router;