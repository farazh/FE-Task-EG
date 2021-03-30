import { createSelector } from "reselect";

const selectSearchTerm = (state) => {
  return state.searchTerm;
};
export const selectItems = (state) => state.items;

export const selectColumnFactory = (columnId) => {
  return createSelector(selectItems, selectSearchTerm, (items, searchTerm) => {
    const filteredItems = items[columnId].filter((item) =>
      item.name.includes(searchTerm)
    );
    return filteredItems;
  });
};
