import React, { useState } from "react";
import { Row } from "../../components/row/Row";
import uuidv1 from "uuid/v1";

interface lineItem {
  name: string;
  id: string;
}

export const Project: React.FC = () => {
  const [lineItems, setLineItems] = useState<lineItem[] | undefined>();

  const deleteRow = (index: number) => {
    if (lineItems) {
      const list = lineItems;
      list.splice(index, 1);
      setLineItems([...list]);
    } else return;
  };

  const lines = lineItems?.map((lineItem, index) => (
    <Row
      key={lineItem.id}
      name={lineItem.name}
      clickHandler={() => deleteRow(index)}
      index={index}
    />
  ));

  const addRow = () => {
    const newLineItem: lineItem = {
      name: `test: ${Math.random()}`,
      id: uuidv1()
    };
    setLineItems([...(lineItems || []), newLineItem]);
  };

  return (
    <>
      <h1>Project</h1>
      {lines}
      <button onClick={addRow}>Add Row</button>
    </>
  );
};
