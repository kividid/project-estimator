import React from "react";
import classes from "./Row.module.css";
import { LineItem } from "../../containers/project/Project";
import { TextField, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface RowProps {
  lineItem: LineItem;
  clickHandler: () => void;
  index: number;
}

export const Row: React.FC<RowProps> = props => {
  return (
    <form className={classes.Row} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" value={props.lineItem.name} />
      <TextField
        id="standard-basic"
        label="Quantity"
        value={props.lineItem.qty}
      />
      <TextField id="standard-basic" label="Cost" value={props.lineItem.cost} />
      <IconButton onClick={props.clickHandler} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </form>
  );
};
