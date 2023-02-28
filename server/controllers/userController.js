const { User } = require('../models');

module.exports = {
    getUser: async (req, res) => {
        try{
            const userData = await User.findById(req.params.id);

            !userData ?
                res.status(400).json("User not found") :
                res.status(200).json(userData);
        }catch (err) {
            res.status(500).json(err);
        }
    },
    createUser: async (req, res) => {
        try{
            const userData = await User.create(req.body);
            res.status(200).json(userData);
        }catch (err) {
            res.status(500).json(err);
        }
    }
}