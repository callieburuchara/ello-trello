export default function cards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists.map(list => list.cards).flat()
    }
    default:
      return state;
  }
}
