export default function cards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists.map(list => list.cards).flat()
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card)
    }
    case "GET_CARD_SUCCESS": {
      return state.concat(action.card)
    }
    default:
      return state;
  }
}
