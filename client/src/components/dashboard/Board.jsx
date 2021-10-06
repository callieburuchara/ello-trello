import React from "react";

import { Link } from "react-router-dom";

const Board = props => {
  const id = props.match.params.id

  return (<h1>{id}</h1>)



};

export default Board;
