import React from "react";
import "./ItemInput.scss";

export const ItemInput = ({ onItemNameChange, nameValue }) => {
  const onInputChange = (e) => {
    onItemNameChange(e.target.value);
  };
  return (
    <input
      className="myInput"
      placeholder="ENTER ITEM"
      onChange={onInputChange}
      value={nameValue}
    ></input>
  );
};
