import React from 'react';
import {makeStyles, Card, Typography, Grid, Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    root:{
        marginTop: '-25%',
        // overflow: 'scroll',
        // display:'flex',
        // flexWrap: 'nowrap'
    },
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    card:{
        padding: 3,
        display: 'flex',
        alignItems: 'center'
    },
    creators:{
        overflow: 'scroll',
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
}))

function TopCreators() {
    const Top_Creators = [
        {
            avatar:'https://i.pinimg.com/736x/58/ab/2a/58ab2ae30685bbba1d42ea3a419dafa5.jpg',
            name:'Aquetica',
            sold: 150
        },
        {
            avatar:'https://i.pinimg.com/236x/c3/51/18/c3511874093854d317bc7c3927132b7b.jpg',
            name:'Globays',
            sold: 108
        },
        {
            avatar:'https://i.pinimg.com/236x/b3/0e/2e/b30e2efe5f5c03c98b2db9d3da96512b.jpg',
            name:'SakiMiracle',
            sold: 106
        },
        {
            avatar:'https://i.pinimg.com/236x/d2/2a/db/d22adbd941f1bfa06ddc2b148224aa07.jpg',
            name:'Experter',
            sold: 94
        },
        {
            avatar:'https://i.pinimg.com/236x/8e/b9/5b/8eb95b41405ec47786ec29533c8e1725.jpg',
            name:'Profixel',
            sold: 50
        },
        {
            avatar:'https://i.pinimg.com/564x/1a/1d/75/1a1d75b51a91defe9bcd5068320b80c6.jpg',
            name:'Bluerack',
            sold: 10
        },
        {
            avatar:'https://i.pinimg.com/236x/ea/92/48/ea9248a676edbd32982b61c802059ce0.jpg',
            name:'Tearchoi',
            sold: 20
        },
        {
            avatar:'https://i.pinimg.com/236x/13/a3/2f/13a32f94b3edaf10b362e240de920518.jpg',
            name:'Kiwise',
            sold: 25
        },
        {
            avatar:'https://i.pinimg.com/236x/12/76/bf/1276bfc057c49d0acf85e5a4905ade67.jpg',
            name:'Aquetica',
            sold: 150
        },
        {
            avatar:'https://i.pinimg.com/236x/5f/0f/67/5f0f675b799816a1e8e9c0a52d18255e.jpg',
            name:'Globays',
            sold: 108
        },
        {
            avatar:'https://i.pinimg.com/236x/b9/b3/34/b9b334a0cf298d00784b5119ee4dac28.jpg',
            name:'SakiMiracle',
            sold: 106
        },
        {
            avatar:'https://i.pinimg.com/236x/18/94/0d/18940d1ddd26070b219edd480107f829.jpg',
            name:'Experter',
            sold: 94
        }
    ]
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}><Typography variant='h4'>Top Creators</Typography></Grid>
            <div className={classes.creators}>
            {Top_Creators.map((creator =>
                // <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card elevation={0} className={classes.card}>
                        <Avatar alt="Remy Sharp" src={creator.avatar} className={classes.small} />
                        <div style={{marginLeft:'10%'}}>
                            <Typography variant='h6'>{creator.name}</Typography>
                            <Typography variant='subtitle1'>{creator.sold}</Typography>
                        </div>
                    </Card>
                </Grid>
                // <Grid item xs={1}></Grid>
            ))}
            </div>
        </Grid>
    )
}

export default TopCreators;
