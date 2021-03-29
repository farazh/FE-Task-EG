import React from "react";
import "./ItemSearch.scss";

export const ItemSearch = ({ onItemSearch }) => (
  <>
    <label className="myLabel">SEARCH AN ITEM</label>
    <div className="search">
      <input type="text" className="myInput" placeholder="SEARCH"></input>
      <span className="fa fa-search" onClick={onItemSearch}></span>
    </div>
  </>
);
