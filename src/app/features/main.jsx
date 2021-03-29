import React, { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { ItemHeader } from "../components/item-header";
import { ItemColumn } from "./item-column";
import { ItemControls } from "./item-controls";
import "./main.scss";

const App = () => {
  const [itemId, setItemId] = useState(1);
  const [itemName, setItemName] = useState("");
  const [columnId, setColumnId] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");
  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);

  const onItemNameChange = (name) => setItemName(name);
  const onColumnSelect = (columnId) => setColumnId(columnId);

  const onItemSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const onItemAdd = () => {
    if (!itemName || columnId === "0") {
      return;
    }
    const item = {
      id: itemId,
      name: itemName,
      columnId,
    };
    columnId === "1"
      ? setColumn1([...column1, item])
      : setColumn2([...column2, item]);
    setItemName("");
    setItemId(itemId + 1);
  };

  const onItemDelete = (item) => {
    const items = item.columnId === "1" ? column1 : column2;
    const newItems = items.filter((i) => i.id !== item.id);
    item.columnId === "1" ? setColumn1(newItems) : setColumn2(newItems);
  };

  const visibleItems1 =
    searchTerm === ""
      ? column1
      : column1.filter((item) => item.name.includes(searchTerm));
  const visibleItems2 =
    searchTerm === ""
      ? column2
      : column2.filter((item) => item.name.includes(searchTerm));
  return (
    <div className="main">
      <Heading />
      <div className="item-head">
        <ItemHeader text="ADD AN ITEM" />
      </div>
      <div className="item-table">
        <div className="controls">
          <ItemControls
            onItemAdd={onItemAdd}
            onItemSearch={onItemSearch}
            onItemNameChange={onItemNameChange}
            onColumnSelect={onColumnSelect}
            nameValue={itemName}
          />
        </div>
        <div className="columns">
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
        </div>
      </div>
    </div>
  );
};
export default App;
