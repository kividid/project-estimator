import React, { useState } from "react";
import { Row } from "../../components/row/Row";
import uuidv1 from "uuid/v1";
import { ProjectTitle } from "../../components/ProjectTitle/ProjectTitle";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Classes from "./Project.module.css";
import AddIcon from "@material-ui/icons/Add";
import { ProjectSummary } from "../../components/ProjectSummary/ProjectSummary";

export interface LineItem {
  id: string;
  name?: string;
  qty?: number;
  cost?: number;
}

export const Project: React.FC = () => {
  const [lineItems, setLineItems] = useState<LineItem[] | undefined>();
  const [margin, setMargin] = useState(25)
  const [qty, setQty] = useState(1)

  const deleteRow = (index: number) => {
    if (lineItems) {
      const list = lineItems;
      list.splice(index, 1);
      setLineItems([...list]);
    } else return;
  };

  const updateLineItem = (id: string, property: string, event: React.SyntheticEvent<any, Event>) => {
    if (!lineItems) return

    const currentLineItems = [...lineItems]


    const lineIndex = currentLineItems.findIndex(lineItem => lineItem.id === id)
    currentLineItems[lineIndex] = {
      ...currentLineItems[lineIndex],
      [property]: event.currentTarget.value
    }
    console.log(currentLineItems)
    setLineItems(currentLineItems)
  }

  const lines = lineItems?.map((lineItem, index) => (
    <Row
      key={lineItem.id}
      lineItem={lineItem}
      handleDelete={() => deleteRow(index)}
      handleChange={updateLineItem}
      index={index}
    />
  ));

  const addRow = () => {
    const newLineItem: LineItem = {
      id: uuidv1()
    };
    setLineItems([...(lineItems || []), newLineItem]);
  };
  
  return (
    <Paper className={Classes.Paper} elevation={2}>
      <ProjectTitle title={"Project Title"} />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={addRow}
      >
        Add Row
      </Button>
      {lines}
      <hr/>
      <ProjectSummary lineItems={lineItems} properties={{margin, setMargin, qty, setQty}} />
    </Paper>
  );
};
