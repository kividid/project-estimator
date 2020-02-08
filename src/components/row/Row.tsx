import React from 'react';
import classes from './Row.module.css'

export const Row: React.FC = () => {
    return (
        <div className={classes.Row}>
            <p>I'm a row</p>
        </div>
    )
}