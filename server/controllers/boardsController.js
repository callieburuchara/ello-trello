const Board = require("../models/board")
const List = require("../models/lists")
const Card = require("../models/card")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title createdAt updatedAt _id")
  .then((boards) => {
    res.json({
      boards,
    });
  });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoard = (req, res, next) => {
  const id = req.params.id
  Board.findOne({ _id: id })
  .populate({
    path: "lists",
    populate: {
      path: "cards",
    }
  })
  .then((board) => res.json(board))
  .catch((err) => next(new HttpError("CALLIE DENIES THIS REQUEST!", 404)))
}

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoard = getBoard
