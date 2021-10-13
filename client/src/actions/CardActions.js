import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card }
}

export function getCardSuccess(card) {
  return { type: types.GET_CARD_SUCCESS, card}
}

export function createNewCard(cardName, listId, callback) {
  return function(dispatch) {
    const newCard = {
      listId: listId,
      card: {
        title: cardName
      }
    }

    apiClient.createNewCard(newCard, data => {
      dispatch(createCardSuccess(data))
      
      if (callback) {
        callback(data)
      }
    })
  }
}
 