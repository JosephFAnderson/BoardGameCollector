const router = require('express').Router();

const {
    getCollection
} = require('../../controllers/collectionController');

router.route('/:collectionName').get(getCollection);

module.exports = router;