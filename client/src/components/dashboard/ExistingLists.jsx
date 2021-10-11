import React from "react";
import { useSelector } from "react-redux"
import List from "./List"
import AddList from "./AddList"

const ExistingLists = ({boardId}) => {
  const lists = useSelector(state => state.lists)
  if ( lists.length > 0 ) {
    return (
      <>
          <div id="existing-lists" className="existing-lists">
            {lists.map(list => {
              return <List list={list} />
            })}
            </div>
      </>
    );
  } else {
    return null
  }
};

export default ExistingLists;
