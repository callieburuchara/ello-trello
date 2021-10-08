import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { createNewList } from "../../actions/ListActions"

const AddList = ({ boardId }) => {
  const dispatch = useDispatch()
  const [ newListName, setNewListName ] = useState("")

  const toggleInput = (e) => {
    const div = e.currentTarget

    if (e.target.className === "x-icon icon" || e.target.className === "button") {
      setNewListName("")
      div.classList.remove("selected")
    } else {
      div.classList.add("selected")
    }
  }

  const handleSubmission = (e) => {
    if (newListName.length > 5) {
      dispatch(createNewList(newListName, boardId))
    } else {
      alert("You can only use list titles with at least 5 characters. Try again.")
    }
  }

  return (
    <div id="new-list" className="new-list" onClick={(e) => toggleInput(e)}>
      <span>Add a List...</span>
      <input type="text" value={newListName} placeholder="What's the name of your list?" onChange={() => setNewListName(event.target.value)} />
        <div>
          <input type="submit" className="button" value="Save" onClick={(e) => handleSubmission(e)} />
          <i className="x-icon icon"></i>
        </div>
    </div>
  )
}

export default AddList