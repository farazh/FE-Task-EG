import React from "react";
import { Heading } from "../components/heading";
import { ItemHeader } from "../components/item-header";
import "./main.scss";

const App = () => (
  <div className="main">
    <Heading />
    <div className="item-head">
      <ItemHeader text="ADD AN ITEM" />
    </div>
    <div className="item-table">
      <span>ITEM TABLE</span>
    </div>
  </div>
);
export default App;
