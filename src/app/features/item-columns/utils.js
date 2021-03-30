const COLUMN1 = "COLUMN1";
const COLUMN2 = "COLUMN2";
const ID = "ID";

export const getItemsFromLocalStorage = async () => {
  const column1 = JSON.parse(localStorage.getItem(COLUMN1) || "[]");
  const column2 = JSON.parse(localStorage.getItem(COLUMN2) || "[]");
  return {
    1: column1,
    2: column2,
  };
};

export const addToLocalStorage = async (item) => {
  const column = item.columnId === 1 ? COLUMN1 : COLUMN2;
  const items = JSON.parse(localStorage.getItem(column) || "[]");
  const nextID = parseInt(localStorage.getItem(ID) || "0") + 1;
  const newItem = {
    ...item,
    id: nextID,
  };
  const newItems = [...items, newItem];
  localStorage.setItem(column, JSON.stringify(newItems));
  localStorage.setItem(ID, nextID);
  return newItem;
};

export const deleteFromLocalStorage = async ({ columnId, itemId }) => {
  const column = columnId === 1 ? COLUMN1 : COLUMN2;
  const items = JSON.parse(localStorage.getItem(column) || "[]");
  const newItems = items.filter((item) => item.id !== itemId);
  localStorage.setItem(column, JSON.stringify(newItems));
};
