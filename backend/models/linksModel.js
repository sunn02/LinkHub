const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const linkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    votes: { type: Number, default: 0 }
})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;