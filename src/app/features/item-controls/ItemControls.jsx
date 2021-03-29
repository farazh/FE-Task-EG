import React from "react";
import { ItemButton } from "../../components/item-button/ItemButton";
import { ItemDropDown } from "../../components/item-drop-down";
import { ItemInput } from "../../components/item-input";
import { ItemSearch } from "../../components/item-search-input";
import "./ItemControls.scss";

export const ItemControls = ({
  onColumnSelect,
  onItemNameChange,
  onItemAdd,
  onItemSearch,
  nameValue,
}) => (
  <div className="item-controls">
    <ItemInput onItemNameChange={onItemNameChange} nameValue={nameValue} />
    <ItemDropDown onColumnSelect={onColumnSelect} />
    <ItemButton onItemAdd={onItemAdd} />
    <ItemSearch onItemSearch={onItemSearch} />
  </div>
);
