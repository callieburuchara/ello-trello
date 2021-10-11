import React, { useState } from "react"
import { useDispatch } from "react-redux"
import CardContainer from "./CardContainer"
import { updateList } from "../../actions/ListActions"

const List = ({list}) => {
  const [titleInput, setTitleInput] = useState(list.title)
  const [titleClicked, setTitleClicked] = useState(false)

  const dispatch = useDispatch()

  const updateListTitle = (e) => {
    setTitleClicked(false)
    dispatch(updateList(titleInput, list._id))
  }

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {titleClicked
              ? <input className="list-title" 
                       value={titleInput}
                       placeholder={titleInput}
                       onChange={(e) => setTitleInput(e.target.value)}
                       onBlur={(e) => updateListTitle(e)}
                       >        
                </input>
              : <p className="list-title" onClick={() => setTitleClicked(true)}>{titleInput}</p> 
            }
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
            </div>
            <CardContainer listId={list._id} />
          </div>
      </div>
    </div>
  )
}

export default List 