const router = require('express').Router();

const {
    getUser,
    createUser
} = require('../../controllers/userController');

router.route('/').post(createUser);

router.route('/:id').get(getUser);

module.exports = router;