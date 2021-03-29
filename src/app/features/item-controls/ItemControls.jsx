import React from "react";
import { ItemButton } from "../../components/item-button/ItemButton";
import { ItemDropDown } from "../../components/item-drop-down";
import { ItemInput } from "../../components/item-input";
import { ItemSearch } from "../../components/item-search-input";
import "./ItemControls.scss";

export const ItemControls = () => (
  <div className="item-controls">
    <ItemInput onInputChange={() => 1} />
    <ItemDropDown onColumnSelect={() => 1} />
    <ItemButton onItemAdd={() => 1} />
    <ItemSearch onItemSearch={() => 1} />
  </div>
);
