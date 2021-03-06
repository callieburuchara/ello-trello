const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card title is required']
  }, 
  dueDate: Date,
  labels: [ { type: String }],
  description: String,
  listId: { type: Schema.Types.ObjectId, ref: "List" },
  boardId: { type: Schema.Types.ObjectId, ref: "Board" },
  position: Number,
  commentsCount: Number,
}, { timestamps: true })

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;