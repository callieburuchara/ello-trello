import React from "react"
import CardContainer from "./CardContainer"

const List = ({list}) => {
  // console.log(list)
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{list.title}</p>
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