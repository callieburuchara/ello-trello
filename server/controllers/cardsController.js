const List = require("../models/lists")
const Card = require("../models/card")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createCard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // We need to format the object to send with the right properties.
    const objToSend = {
      "title": req.body.card.title,
      "description": "",
      "labels": [],
      "listId": req.body.listId,
      "position": 65535.0,
      "archived": false,
      "dueDate": null,
      "completed": false,
      "boardId": 1,
      "comments": [],
      "actions": []
      "commentsCount": 0
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