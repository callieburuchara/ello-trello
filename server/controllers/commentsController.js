const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const Card = require("../models/card")
const Comment = require("../models/comment")

const createComment = async (req, res, next) => {
  const errors = validationResult(req);
  // stopped here

  if (errors.isEmpty()) {
    const cardId = req.body.cardId
    const text = req.body.comment.text

    const objToSend = {
      text,
      cardId,
    }

    Comment.create(objToSend)
      .then((comment) => {
        Comment.findById(comment._id).then(
          (comment) => {
            req.comment = comment
            next()
          }
        );
      })
      .catch((err) => 
        next(new HttpError("Creating comment failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const increaseCommentsCountOnList = async (req, res, next) => {
  const cardId = req.comment.cardId
  let originalValue;

  await Card.findById(cardId).then((card) => originalValue = card.commentsCount)

  Card.findByIdAndUpdate(cardId, {
    $set: { commentsCount: originalValue + 1 },
  }).then(() => next() )
};

const sendComment = (req, res, next) => {
  res.json(req.comment)
}

exports.createComment = createComment;
exports.sendComment = sendComment;
exports.increaseCommentsCountOnList = increaseCommentsCountOnList;