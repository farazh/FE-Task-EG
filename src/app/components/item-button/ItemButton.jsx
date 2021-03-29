import React from "react";
import "./ItemButton.scss";

export const ItemButton = ({ onItemAdd }) => {
  return (
    <button className="myButton" onClick={() => onItemAdd()}>
      ADD ITEM
    </button>
  );
};
