const express = require ('express');
const router = express.Router();
const listsController = require("../controllers/listsController")
const boardsController = require("../controllers/boardsController");
const { validateBoard } = require("../validators/validators");

router.get('/boards',boardsController.getBoards );

router.post('/boards', validateBoard, boardsController.createBoard );

router.get('/boards/:id', boardsController.getBoard)

router.post('/lists', listsController.createList, listsController.addListToBoard, listsController.sendList)

router.put('/lists/:id', listsController.updateListTitle, listsController.sendList)
 
module.exports = router;