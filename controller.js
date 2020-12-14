const mongo = require("./mongo")

async function getFromDBTest(coll, query) {
    return await mongo.get(coll, query);
}

module.exports.testConnection = async function(req, res) {
    try {
        const accts = await getFromDBTest('books', {})
        res.send(accts);
    } catch (error) {
        res.send("Error: ", error)
    }
}