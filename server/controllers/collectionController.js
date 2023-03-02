const { BggClient } = require("boardgamegeekclient");
const client = BggClient.Create();

module.exports = {
    getCollection: async (req, res) => {
        try{
            const collection = await client.collection.query({
                username: req.params.collectionName,
                subtype: ["boardgame"]
            })

             res.status(200).json(collection[0].items)
        }catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}