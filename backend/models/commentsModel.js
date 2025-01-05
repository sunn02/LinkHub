const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    links: [{ type: Schema.Types.ObjectId, ref: 'Link', required: true  }],
    content: { type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
