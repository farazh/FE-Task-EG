import React from "react";
import "./ItemDropDown.scss";

export const ItemDropDown = ({ onColumnSelect }) => {
  const onChange = (e) => {
    onColumnSelect(e.target.value);
  };
  return (
    <select className="mySelect" onChange={onChange} defaultValue="1">
      <option value="0">CHOOSE COLUMN</option>
      <option value="1">Column 1</option>
      <option value="2">Column 2</option>
    </select>
  );
};
