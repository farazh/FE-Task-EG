import React from "react";
import "./ItemButton.scss";

export const ItemButton = ({ onItemAdd }) => (
  <button className="myButton" onClick={onItemAdd}>
    ADD ITEM
  </button>
);
