const mongoose = require("mongoose")

const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Test = mongoose.model('Test', schema);

module.exports = Test