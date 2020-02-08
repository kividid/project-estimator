import React from "react";
import classes from "./Row.module.css";

interface RowProps {
  name: string;
  clickHandler: () => void;
  index: number;
}

export const Row: React.FC<RowProps> = props => {
  return (
    <div className={classes.Row} onClick={props.clickHandler}>
      <p>{props.name}</p>
    </div>
  );
};
