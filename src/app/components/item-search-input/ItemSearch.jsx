import React, { useRef } from "react";
import "./ItemSearch.scss";

export const ItemSearch = ({ onItemSearch }) => {
  const searchInput = useRef(null);
  const onInputChange = (e) => {
    onItemSearch(e.target.value || "");
  };
  return (
    <>
      <label className="myLabel">SEARCH AN ITEM</label>
      <div className="search">
        <input
          type="text"
          className="myInput"
          placeholder="SEARCH"
          onChange={onInputChange}
        ></input>
        <span className="fa fa-search"></span>
      </div>
    </>
  );
};
