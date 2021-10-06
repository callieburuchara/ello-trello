import React from "react";

import { Link } from "react-router-dom";

const BoardTile = props => {
  return <li className="board-tile">
    <Link to={`/boards/${props.id}`}>
      <span className="board-title">{props.title}</span>
    </Link>
  </li>
};

export default BoardTile;


/*
- parse the URL for the id
- send a request to api/boards/:id
- dispatch an action to the store
- show the board on the screen

SUBACTIONS
- create an action creator in actions/BoardActions.js
  - should return an async function that we'll dispatch to the store from the 
    Board component (inside useEffect)




*/
