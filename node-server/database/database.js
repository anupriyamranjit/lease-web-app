let mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        const env = process.env;
        let uri;
        if (env.NODE_ENV === "test") {
            uri = env.TEST_URI;
        } else {
            uri = env.ATLAS_URI;
        }

        const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(uri, connectionParams)
            .then(() => console.log("Connection Successful"))
            .catch(err => console.error(err));
    }
}

module.exports = new Database()

