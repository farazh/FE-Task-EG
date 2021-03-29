import React from "react";
import { ItemColumn } from "../../components/item-column";

export const ColumnContainer = ({
  column1,
  column2,
  onItemDelete,
  searchTerm,
}) => {
  const visibleItems1 =
    searchTerm === ""
      ? column1
      : column1.filter((item) => item.name.includes(searchTerm));
  const visibleItems2 =
    searchTerm === ""
      ? column2
      : column2.filter((item) => item.name.includes(searchTerm));
  return (
    <>
      <ItemColumn
        columnId="1"
        items={visibleItems1}
        onItemDelete={onItemDelete}
      />
      <ItemColumn
        columnId="2"
        items={visibleItems2}
        onItemDelete={onItemDelete}
      />
    </>
  );
};
