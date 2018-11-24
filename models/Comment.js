const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  picPath: String,
  picName: String,
  kioskName: String,
  rate: Number,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
