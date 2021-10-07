import React from "react";
import { useSelector } from "react-redux"
import ExistingLists from "./ExistingLists"
import AddList from "./AddList"

const ListsContainer = ({boardId}) => {
  return (
    <>
      <ExistingLists boardId={boardId}/>
      <AddList />
    </>
  )
}

export default ListsContainer