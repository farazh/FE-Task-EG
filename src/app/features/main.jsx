import React from "react";
import { Heading } from "../components/heading";
import { ItemHeader } from "../components/item-header";
import { ItemColumn } from "./item-column";
import { ItemControls } from "./item-controls";
import "./main.scss";

const mockItems1 = [
  { id: 1, name: "Faraz" },
  { id: 2, name: "Hussain" },
  { id: 3, name: "Maryam" },
];

const mockItems2 = [
  { id: 1, name: "Faraz" },
  { id: 2, name: "Hussain" },
  { id: 3, name: "Hibsi" },
];

const App = () => (
  <div className="main">
    <Heading />
    <div className="item-head">
      <ItemHeader text="ADD AN ITEM" />
    </div>
    <div className="item-table">
      <div className="column">
        <ItemControls />
      </div>
      <div className="column">
        <ItemColumn columnId={1} items={mockItems1} />
      </div>
      <div className="column">
        <ItemColumn columnId={2} items={mockItems2} />
      </div>
    </div>
  </div>
);
export default App;
