import React from "react";
import { Item } from "../../components/item";
import { ItemHeader } from "../../components/item-header";
import "./ItemColumn.scss";

export const ItemColumn = ({ columnId, items, onItemDelete }) => (
  <div className="item-column">
    <div className="column-child">
      <ItemHeader text={`COLUMN ${columnId}`} />
    </div>
    <>
      {items.map((item) => (
        <div className="column-child">
          <Item key={item.id} item={item} onItemDelete={onItemDelete} />
        </div>
      ))}
    </>
  </div>
);
