
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String },
    drafts: [{ type: Object }] 
});

module.exports = mongoose.model('User', userSchema);