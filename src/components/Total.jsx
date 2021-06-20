import React from 'react';
import accounting from 'accounting';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },

    button: {
        marginTop: "2rem"
    }
}))

const Total = () => {
    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5> {accounting.formatMoney(50)} </h5>
            <Button className={classes.button} variant="contained" color="secondary">Check out</Button>
        </div>
    )
}

export default Total