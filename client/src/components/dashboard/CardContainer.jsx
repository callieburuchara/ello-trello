import React from "react";
import ExistingCards from "./ExistingCards"
import AddCard from "./AddCard"

const CardContainer = ({listId, activeCard, onAddCardClick, onAddCardClose}) => {
  return (
    <>
      <ExistingCards listId={listId}/>
      <AddCard 
        listId={listId}
        activeCard={activeCard}
        onAddCardClick={onAddCardClick}
        onAddCardClose={onAddCardClose}/>
    </>
  )
}

export default CardContainer