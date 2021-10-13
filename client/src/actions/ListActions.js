import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list }
}

export function updateListSuccess(title, id) {
  return { type: types.UPDATE_LIST_SUCCESS, title, id}
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
      dispatch(createListSuccess(data))
      if (callback) {
        callback(data)
      }
    })
  }
}

export function updateList(listName, id) {
  const updatedList = {
    title: listName
  }

  return function(dispatch) {
    apiClient.updateList(id, updatedList, data => {
      dispatch(updateListSuccess(data.title, data._id))
    })
    
  }
} 