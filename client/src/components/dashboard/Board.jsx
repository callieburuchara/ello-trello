import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import * as actions from "../../actions/BoardActions"
import ListsContainer from "./ListsContainer"

const Board = props => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  const location = useLocation().pathname
  const unknownId = useParams().id
  let boardId;
  let cardId;

  if (location.includes("boards")) {
    boardId = unknownId
  } else if (location.includes("cards")){
    cardId = unknownId
    const card = cards.find(c => c._id === cardId)
    if (card) boardId = card.boardId
  }

  useEffect(() => {
    if (boardId) {
      dispatch(actions.fetchBoardById(boardId))
      // this isn't triggering when we (a) open the card modal view nor (b) when we refresh the page in card modal view
    }
  }, [boardId])
 
  const board = useSelector(state => state.boards).find(b => b._id === boardId)


  if (board) {
    return (
      <>
      <header>
        <ul>
          <li id="title">{board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <ListsContainer boardId={boardId}/>
      </>
    )
  } else {
    return null
  }





};

export default Board;
