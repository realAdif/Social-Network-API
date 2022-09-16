const router = require('express').Router();
const {createReaction} = require('../../controllers/reactionControllers');

router.route("/:thoughtId/reactions").post(createReaction);

module.exports = router;