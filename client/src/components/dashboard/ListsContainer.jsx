import React from "react";
import { useSelector } from "react-redux"
import ExistingLists from "./ExistingLists"
import AddList from "./AddList"

const ListsContainer = () => {
  return (
    <>
      <ExistingLists />
      <AddList />
    </>
  )
}

export default ListsContainer