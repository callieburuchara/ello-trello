export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists
    }
    case "CREATE_LIST_SUCCESS": {
      return state.concat(action.list)
    }
    default:
      return state;
  }
}
