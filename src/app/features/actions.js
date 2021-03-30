export const LOAD_ITEMS = {
  REQUEST: "LOAD_ITEMS_REQUEST",
  SUCCESS: "LOAD_ITEMS_SUCCESS",
};

export const ADD_ITEM = {
  REQUEST: "ADD_ITEM_REQUEST",
  SUCCESS: "ADD_ITEM_SUCCESS",
};

export const DELETE_ITEM = {
  REQUEST: "DELETE_ITEM_REQUEST",
  SUCCESS: "DELETE_ITEM_SUCCESS",
};
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const loadItems = () => ({
  type: LOAD_ITEMS.REQUEST,
});

export const addItem = (item) => ({
  type: ADD_ITEM.REQUEST,
  item,
});

export const deleteItem = ({ id, columnId }) => ({
  type: DELETE_ITEM.REQUEST,
  itemId: id,
  columnId,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});
