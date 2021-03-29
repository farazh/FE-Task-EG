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
  <>
    <div className="item-controls-desktop">
      <div className="item-control-child enter-item-control">
        <ItemInput onItemNameChange={onItemNameChange} nameValue={nameValue} />
      </div>
      <div className="item-control-child">
        <ItemDropDown onColumnSelect={onColumnSelect} />
      </div>
      <div className="item-control-child add-item-control">
        <ItemButton onItemAdd={onItemAdd} />
      </div>
      <div className="item-control-child">
        <ItemSearch onItemSearch={onItemSearch} />
      </div>
    </div>
    <div className="item-controls-mobile">
      <div className="item-control-child-mobile">
        <div className="padding">
          <ItemInput
            onItemNameChange={onItemNameChange}
            nameValue={nameValue}
          />
        </div>
        <div className="padding">
          <ItemDropDown onColumnSelect={onColumnSelect} />
        </div>
      </div>
      <div className="item-control-child-mobile add-item-control-mobile">
        <div className="padding">
          <ItemButton onItemAdd={onItemAdd} />
        </div>
        <div className="padding">
          <ItemSearch onItemSearch={onItemSearch} />
        </div>
      </div>
    </div>
  </>
);
