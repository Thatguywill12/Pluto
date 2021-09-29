// import React from 'react';
// import {Grid, Typography, makeStyles} from "@material-ui/core"
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Button, makeStyles, Grid, Card, Typography } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    root:{
        // backgroundColor: 'red',
        display: 'flex',
        // marginTop: '3%'
    },
    rootContainer:{
        display: 'flex',
        marginTop: '5%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // alignItems: 'center'
    },
    popularWorkContainer:{
        // display: 'flex'
        // backgroundColor: 'blue',
        marginTop: '1%'
    },
    carousel:{
        width: '100vw',
        // height: theme.spacing(2000),
        // marginTop: '10%'
        borderRadius: theme.spacing(0),
        [theme.breakpoints.up('md')]: {
            
        }

    },
    slider2:{
        width: '100%',
        // backgroundColor: 'red',
    },
    topImg:{
        width:'100%',
        height: theme.spacing(52),
        [theme.breakpoints.down('md')]:{
        
        },
        [theme.breakpoints.up('md')]:{
        
        },
        [theme.breakpoints.up('lg')]:{

        }
        // borderRadius: theme.spacing(3)
    },
    popularImg:{
        // width:'100%',
        // height: theme.spacing(40),
        borderRadius: theme.spacing(2),
        width:'90%',
        height: theme.spacing(25),
        [theme.breakpoints.down('md')]:{
        
        },
        [theme.breakpoints.up('md')]:{
        
        },
        [theme.breakpoints.up('lg')]:{

        }
    }
}))


function TopWork(props){

    const classes = useStyles();

    var Top_Nfts = [
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/19/c2/e4/19c2e4b691175840a7246f58c1d72b9c.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/2a/1c/ae/2a1cae172dcd44516d39f910e59762ae.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/b4/94/be/b494bea77d148870df2e64cb8813460a.jpg"
        }
    ]
    
    return (
        <Carousel className={classes.carousel}>
            {
                Top_Nfts.map( (topNftItem, i) => <TopWorkItem key={i} item={topNftItem} /> )
            }
        </Carousel>
    )
}

function TopWorkItem(props){
    const classes = useStyles();
    return (
        <Paper>
            <img 
                className={classes.topImg}
                src={props.item.img}
            />
        </Paper>
    )
}

function NextArrow(props){
    const { className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    )
}

function PrevArrow(props){
    const { className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    )
}

function PopularWork(){
    const Popular_Nfts = [
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/6f/b2/de/6fb2de873cca36c0dc319eea7133fc5c.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/564x/6b/b8/40/6bb840a903ba17307b5dbf769b119aa3.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/564x/10/51/40/105140a27f6420e9011cdcd4656ebb37.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/1e/64/ec/1e64ecff648d5cd0b1b82eed22485f0d.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/22/01/d8/2201d8ff21afa8510d66fe947db1a610.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/45/b1/cb/45b1cb55654cbe59cf1eac43fd3dd326.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/236x/78/dc/c9/78dcc92dc05becedade86c5db601cca8.jpg"
        },
        {
            name:'Unexpected Callap',
            creator: 'Jane Doe',
            img: "https://i.pinimg.com/564x/ae/65/7e/ae657e2c305ce1e71c366ee1bad104e1.jpg"
        }
    ]

    const classes = useStyles();
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1.5,
        speed: 500,
        rows: 1,
        // slidesPerRow: 1,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
        // responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             className: "center",
        //             centerMode: true,
        //             infinite: true,
        //             // centerPadding: "60px",
        //             autoplay: true,
        //             autoplaySpeed: 2000,
        //             slidesToShow: 3,
        //             speed: 500,
        //             rows: 1,
        //             slidesPerRow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             className: "center",
        //             centerMode: true,
        //             infinite: true,
        //             // centerPadding: "60px",
        //             autoplay: true,
        //             autoplaySpeed: 2000,
        //             slidesToShow: 3,
        //             speed: 500,
        //             rows: 1,
        //             slidesPerRow: 1,
        //         }
        //     }
        // ]
    };

    return(
        <Grid container spacing={2} className={classes.popularWorkContainer}>
            <Slider {...settings} className={classes.slider2}>
                    {Popular_Nfts.map(item => (
                        <Grid item xs={12} md={11}>
                                <
                                    img 
                                    className={classes.popularImg}
                                    src={item.img}
                                />
                        </Grid>
                    ))}
            </Slider>
        </Grid>
    )
}

function Hero(){
    const classes = useStyles(); 
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 1,
    //     speed: 500,
    //     rows: 1,
    //     slidesPerRow: 1
    // };

    return(
        // <Card className={classes.root}>
        <div  className={classes.root}>
            <Grid container spacing={2} className={classes.rootContainer}>

                <Grid item xs={12} md={5}>
                    <TopWork />
                </Grid>
                <Grid item xs={12} md={7}>
                    <PopularWork />
                </Grid>

            </Grid>
        </div>
        // </Card>
    )
}

export default Hero;