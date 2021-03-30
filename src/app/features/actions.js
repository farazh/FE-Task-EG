export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const deleteItem = ({ id, columnId }) => ({
  type: DELETE_ITEM,
  itemId: id,
  columnId,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});
