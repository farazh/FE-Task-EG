import React from "react";
import "./Item.scss";

export const Item = ({ itemId, itemName, onItemDelete }) => (
  <div className={`${itemId % 2 === 0 ? "item-dark-gray" : "item-light-gray"}`}>
    <span className="child">{itemName}</span>
    <span className="child fa fa-times" onClick={onItemDelete}></span>
  </div>
);
