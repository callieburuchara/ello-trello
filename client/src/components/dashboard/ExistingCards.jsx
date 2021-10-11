import React from "react";
import { useSelector } from "react-redux"
import Card from "./Card"

const ExistingCards = ({listId}) => {
  const cards = useSelector(state => state.cards.filter(card => card.listId === listId))

  return (
    <>
      <div id="cards-container" data-id="list-1-cards">
          <div className="card-background">
            {cards.map(card => {
              return <Card card={card}/>
            })}
          </div>
      </div>
  </>
  )
}

export default ExistingCards