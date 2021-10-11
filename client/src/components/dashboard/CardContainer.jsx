import React from "react";
import ExistingCards from "./ExistingCards"
import AddCard from "./AddCard"

const CardContainer = ({listId}) => {
  return (
    <>
      <ExistingCards listId={listId}/>
      <AddCard />
    </>
  )
}

export default CardContainer