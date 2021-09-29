import React from 'react';
import Hero from './Hero';
import TopCreators from './TopCreators';
import { Paper, Button, makeStyles, Grid, Card, Typography } from '@material-ui/core'
import LiveAuctions from './LiveAuctions';
import Discover from './Discover';


const useStyles = makeStyles((theme) => ({
    root:{
        // padding: theme.spacing(1)
    }
}))


function Explore() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={10}>
                
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <Hero />
                </Grid>
                <Grid item xs={0} md={1}></Grid>

                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <TopCreators/>
                </Grid>
                <Grid item xs={0} md={1}></Grid>

                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={11}>
                    <LiveAuctions/>
                </Grid>
                {/* <Grid item xs={0} md={0}></Grid> */}

                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <Discover />
                </Grid>
                <Grid item xs={0} md={1}></Grid>

            </Grid>
        </div>
    )
}

export default Explore;
