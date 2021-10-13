import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import * as actions from "../../actions/BoardActions"
import ListsContainer from "./ListsContainer"

const Board = props => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  const location = useLocation()
  const unknownId = useParams().id
  let boardId;
  let cardId;

  if (location.pathname.includes("boards")) {
    boardId = unknownId
  } else if (location.pathname.includes("cards")){
    cardId = unknownId
  }

  useEffect (() => {
    if (cardId && cards.length < 1) {
      dispatch(actions.fetchBoards())
    }
  }, [dispatch, cardId, cards])

  const card = useSelector(state => {
    if (cardId) {
      return state.cards.filter(c => c._id === cardId)
    } else {
      return null
    }
  })

  if (!boardId) {
    boardId = card.boardId
  } 

  useEffect(() => {
    if (boardId) {
      dispatch(actions.fetchBoardById(boardId))
    }
  }, [dispatch, boardId])

  const board = useSelector(state => state.boards).filter(b => b._id === boardId)

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
