const Accounts = require('../models/Accounts')

module.exports = async () => {
    try{
        const result = await Accounts.find()

        return result
    } catch (err) {
        return []
    }
}