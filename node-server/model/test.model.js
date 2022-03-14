const mongoose = require("mongoose");
mongoose.set('debug', true);

const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;