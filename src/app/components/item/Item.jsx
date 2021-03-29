import React from "react";
import "./Item.scss";

export const Item = ({ item, onItemDelete }) => (
  <div className="item-row">
    <span className="child">{item.name}</span>
    <span
      className="child fa fa-times"
      onClick={() => onItemDelete(item)}
    ></span>
  </div>
);
