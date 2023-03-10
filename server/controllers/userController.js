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
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        try{
            const id = req.params.id;
            const updatedUser = await User.findOneAndUpdate({_id: id}, req.body, { new: true });
            res.status(200).json(updatedUser);
        }catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}