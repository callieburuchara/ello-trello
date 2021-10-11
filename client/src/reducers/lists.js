export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists
    }
    case "CREATE_LIST_SUCCESS": {
      return state.concat(action.list)
    }
    case "UPDATE_LIST_SUCCESS": {
      return state.map(list => {
        console.log(list._id, action.id)
        if (list._id === action.id) {
          return {...list, title: action.title}
        } else {
          return list
        }
      })
    }
    default:
      return state;
  }
}
