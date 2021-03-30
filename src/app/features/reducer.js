import { ADD_ITEM, DELETE_ITEM, SET_SEARCH_TERM } from "./actions";

const initialState = {
  items: {
    1: [],
    2: [],
  },
  searchTerm: "",
};
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const columnId = action.item.columnId;
      return {
        ...state,
        items: {
          ...state.items,
          [columnId]: [...state.items[columnId], action.item],
        },
      };
    }
    case DELETE_ITEM: {
      const columnId = action.columnId;
      const itemId = action.itemId;
      const newItems = state.items[columnId].filter(
        (item) => item.id !== itemId
      );
      return {
        ...state,
        items: {
          ...state.items,
          [columnId]: newItems,
        },
      };
    }
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};
