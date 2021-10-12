const express = require ('express');
const router = express.Router();
const listsController = require("../controllers/listsController")
const boardsController = require("../controllers/boardsController");
const cardsController = require("../controllers/cardsController")
const { validateBoard } = require("../validators/validators");

// BOARDS
router.get('/boards',boardsController.getBoards );

router.post('/boards', validateBoard, boardsController.createBoard );

router.get('/boards/:id', boardsController.getBoard)

// LISTS
router.post('/lists', listsController.createList, listsController.addListToBoard, listsController.sendList)

router.put('/lists/:id', listsController.updateListTitle, listsController.sendList)


// CARDS
router.get('/cards/:id', cardsController.getCard)
router.post('/cards', cardsController.createCard, cardsController.addCardToList, cardsController.sendCard)
 
module.exports = router;