import React from "react";
import ExistingCards from "./ExistingCards"
import AddCard from "./AddCard"

const CardContainer = ({listId}) => {
  console.log(listId)
  return (
    <>
      <ExistingCards listId={listId}/>
      <AddCard />
    </>
  )
}

export default CardContainer