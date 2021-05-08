import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import useStyles from "../hooks/styles";
import Offers from "../elements/Offers";

export default function Home() {
    const classes = useStyles();
    return (
        <div className="home">
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Offers />
                </Paper>
            </Grid>
        </div>
    )
}
