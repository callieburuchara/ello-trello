import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewCard } from "../../actions/CardActions"

const AddCard = ({listId, activeCard, onAddCardClick, onAddCardClose }) => {
  const dispatch = useDispatch()
  const [newCardName, setNewCardName] = useState("")

  const closeForm = () => {
    setNewCardName("")
    onAddCardClose()
  }

  const submitNewCard = (e) => {
    dispatch(createNewCard(newCardName, listId))
    closeForm()
  }

  return (
    < >
      <div className={activeCard ? "add-dropdown add-bottom active-card": "add-dropdown add-bottom"}>
      <div className="card">
        <div className="card-info"></div>
        <textarea name="add-card" 
                  value={newCardName} 
                  onChange={(e) => setNewCardName(e.target.value)}></textarea>
        <div className="members"></div>
      </div>
      <a className="button" onClick={(e) => submitNewCard(e)}>Add</a>
      <i className="x-icon icon" onClick={closeForm}></i>
      <div className="add-options">
        <span>...</span>
      </div>
    </div>
    <div className="add-card-toggle" data-position="bottom" onClick={() => onAddCardClick(listId)}>
      Add a card...
    </div>
  </>
  )
}

export default AddCard