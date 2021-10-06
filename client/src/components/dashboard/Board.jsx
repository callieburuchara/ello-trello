import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux"
import * as actions from "../../actions/BoardActions"
import ListsContainer from "./ListsContainer"

import { Link } from "react-router-dom";

const Board = props => {
  const dispatch = useDispatch()
  const boardId = props.match.params.id
  const board = useSelector(state => state.boards.find(b => b._id === boardId))
  console.log(board)

  useEffect(() => {
    dispatch(actions.fetchBoardById(boardId))
  }, [dispatch])


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



};

export default Board;
