const List = require("../models/lists")
const Board = require("../models/board")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const objToSend = {
      boardId: req.body.boardId,
      title: req.body.list.title
    }
    List.create(objToSend)
      .then((list) => {
        List.find({ _id: list._id }, "title _id boardId createdAt updatedAt").then(
          (list) => {
            list = list[0]
            console.log(list.boardId)
            Board.updateOne({_id: list.boardId }, {$addToSet: {lists:list}})
            return res.json({ list })
          }
        );
      })
      .catch((err) => 
      console.error(err)
        // next(new HttpError("Creating list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.createList = createList;
