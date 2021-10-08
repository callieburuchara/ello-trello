import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list }
}

export function createNewList(listName, boardId, callback) {
  return function(dispatch) {
    const newList = {
      boardId: boardId,
      list: {
        title: listName
      }
    }

    apiClient.createNewList(newList, data => {
      console.log("I AM THE DATA", data)
      dispatch(createListSuccess(data.list))

      // Right now, when we try to create a new list, it looks like it's working on the backend
      // but then we get an error like reading it is wrong? 

      // We think that the issue is because our previous lists we created were manually added
      // so there may be a new disconnect between how we used to parse lists and how we do it now
      // that we have actually created them through post requests. 

      if (callback) {
        callback(data.list)
      }
    })
  }
}