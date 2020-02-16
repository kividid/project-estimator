import React from "react";
import classes from "./Row.module.css";
import { LineItem } from "../../containers/project/Project";
import { TextField, IconButton, FormControlLabel, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface RowProps {
  lineItem: LineItem;
  handleDelete: () => void;
  handleChange: (id: string, property: string, event: React.SyntheticEvent<any, Event>) => void;
  index: number;
}

export const Row: React.FC<RowProps> = ({ lineItem, handleDelete, handleChange, index }) => {
  return (
    <form className={classes.Row} noValidate autoComplete="off">
      <TextField className={classes.Input} id="standard-basic" label="Name" value={lineItem.name} onChange={(e) => handleChange(lineItem.id, 'name', e)} />
      <TextField
        className={classes.Input}
        id="standard-basic"
        label="Quantity"
        type="number"
        value={lineItem.qty}
        onChange={(e) => handleChange(lineItem.id, 'qty', e)}
      />
      <TextField className={classes.Input} id="standard-basic" label="Cost" type="number" value={lineItem.cost} onChange={(e) => handleChange(lineItem.id, 'cost', e)} />
      <FormControlLabel 
        control={<Checkbox checked={lineItem.flat} onChange={(e) => handleChange(lineItem.id, 'flat', e)} />}
        label="Flat Cost"
      />
      <IconButton onClick={handleDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </form>
  );
};
