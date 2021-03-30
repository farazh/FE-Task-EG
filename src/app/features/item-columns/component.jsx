import React from "react";
import { ItemColumn } from "../../components/item-column";

export const ItemColumns = ({ column1Data, column2Data, onItemDelete }) => (
  <>
    <ItemColumn columnId="1" items={column1Data} onItemDelete={onItemDelete} />
    <ItemColumn columnId="2" items={column2Data} onItemDelete={onItemDelete} />
  </>
);
