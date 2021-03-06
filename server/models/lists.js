const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The List title is required']
  },
  boardId: { type: Schema.Types.ObjectId, ref: "Board" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  position: Number,
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }]
})

const List = mongoose.model('List', ListSchema);

module.exports = List;