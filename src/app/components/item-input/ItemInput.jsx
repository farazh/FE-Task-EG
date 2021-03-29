import React from "react";
import "./ItemInput.scss";

export const ItemInput = ({ onInputChange }) => (
  <input
    className="myInput"
    placeholder="ENTER ITEM"
    onChange={onInputChange}
  ></input>
);
