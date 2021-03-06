import React, { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { ItemHeader } from "../components/item-header";
import { ItemControls } from "./item-controls";
import ColumnContainer from "./item-columns/container";
import { addItem, loadItems, setSearchTerm } from "./actions";
import { useDispatch } from "react-redux";
import "./main.scss";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [columnId, setColumnId] = useState("1");
  const dispatch = useDispatch();

  const onItemNameChange = (name) => setItemName(name);
  const onColumnSelect = (columnId) => setColumnId(columnId);

  const onItemSearch = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm));
  };

  const onItemAdd = () => {
    if (!itemName || columnId === "0") {
      return;
    }
    const item = {
      name: itemName,
      columnId: parseInt(columnId),
    };

    dispatch(addItem(item));
    setItemName("");
  };

  useEffect(() => {
    dispatch(loadItems());
  }, []);

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
          <ColumnContainer />
        </div>
      </div>
    </div>
  );
};
export default App;
