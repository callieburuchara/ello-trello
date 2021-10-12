import React, { useState } from "react";
import { useSelector } from "react-redux"
import List from "./List"
import AddList from "./AddList"

const ExistingLists = ({boardId}) => {
  const [activeList, setActiveList] = useState(null)

  const handleAddCardClick = (id) => {
    setActiveList(id)
  }

  const handleAddCardClose = () => {
    setActiveList(null)
  }

  const lists = useSelector(state => state.lists)
  if ( lists.length > 0 ) {
    return (
      <>
          <div id="existing-lists" className="existing-lists">
            {lists.map(list => {
              return <List list={list} 
                           activeCard={activeList === list._id}
                           onAddCardClick={handleAddCardClick}
                           onAddCardClose={handleAddCardClose}/>
            })}
            </div>
      </>
    );
  } else {
    return null
  }
};

export default ExistingLists;
