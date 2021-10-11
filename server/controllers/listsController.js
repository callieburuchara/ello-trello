const List = require("../models/lists")
const Board = require("../models/board")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {

    const objToSend = {
      boardId: req.body.boardId,
      title: req.body.list.title,
      position: 65535,
      cards: []
    }
    List.create(objToSend)
      .then((list) => {
        List.findById(list._id, "title _id boardId createdAt updatedAt").then(
          (list) => {
            req.list = list
            next()
          }
        );
      })
      .catch((err) => 
        next(new HttpError("Creating list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const addListToBoard = (req, res, next) => {
  const list = req.list;
  const boardId = req.body.boardId;

  Board.findByIdAndUpdate(boardId, {
    $addToSet: { lists: list._id }, 
  }).then(() => {
    next();
  });
};

const updateListTitle = (req, res, next) => {
  const listId = req.params.id
  const title = req.body.title

  List.findByIdAndUpdate(listId, { title })
    .then((list) => {
      req.list = list
      next()
    }
  ) 
}

const sendList = (req, res, next) => {
  res.json(req.list)
}

exports.createList = createList;
exports.addListToBoard = addListToBoard
exports.updateListTitle = updateListTitle
exports.sendList = sendList


