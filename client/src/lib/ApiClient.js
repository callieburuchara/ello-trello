import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, {board})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoardById: function(id, callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL + `/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createNewList: function(newList, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, newList)
      .then(unwrapData)
      .then(callback)
      .catch(logError)
  },
  updateList: function(id, updatedList, callback) {
    return axios
      .put(routes.UPDATE_LIST + `/${id}`, updatedList)
      .then(unwrapData)
      .then(callback)
      .catch(logError)
  },
  createNewCard: function(newCard, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, newCard)
      .then(unwrapData)
      .then(callback)
      .catch(logError)
  },
  updateCard: function(id, updatedCard, callback) {
    return axios
      .put(routes.UPDATE_CARD_URL +  `/${id}`, updatedCard)
      .then(unwrapData)
      .then(callback)
      .catch(logError)
  },
  getCardById: function(id, callback) {
    return axios
      .get(routes.GET_CARD_URL + `/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError)
  }
};

export default apiClient;
