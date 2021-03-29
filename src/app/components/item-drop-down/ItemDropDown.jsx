import React from "react";
import "./ItemDropDown.scss";

export const ItemDropDown = ({ onColumnSelect }) => (
  <select className="mySelect" onChange={onColumnSelect}>
    <option value="0">CHOOSE COLUMN</option>
    <option value="1">Column 1</option>
    <option value="2">Column 2</option>
  </select>
);
