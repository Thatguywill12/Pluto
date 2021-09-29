import React, {Component} from 'react';
import './item.css';
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-grid-carousel'
import {
    Card,
    Typography,
    Avatar,
    makeStyles,
    CardMedia,
    IconButton,
    CardContent,
    CardActions,
    CardHeader,
    Grid
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';



//Styling
const useStyles = makeStyles((theme) => ({
    root:{
        // padding:theme.spacing(3)
    },
    cards:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        width: theme.spacing(55),
        height: theme.spacing(55),
        marginTop:'8%',
        borderRadius: theme.spacing(2),
    },
    cardHeader:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    avatars:{
        display:'flex'
    },
    cardFooter:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    likes:{
        display:'flex'
    },
    slider:{
        backgroundColor:'red',
        // display:'flex',
        // flexDirection: 'flex-start',
        width: "100%",
        height: theme.spacing(60),
        // marginLeft: theme.spacing(-8) 
        // alignItems:'center'
    },
    img:{
        width: '90%',
        // height:theme.spacing(30),
        padding: theme.spacing(2),
        borderRadius: theme.spacing(3)
    }

}))

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

function LiveAuctions() {

    //demo auctions
    const Auctions = [
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/736x/b9/61/ae/b961ae536a471a1ebd32324ccbe2b245.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/c5/31/5e/c5315e1eece9d457cca1145a9e580810.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/a3/5a/5e/a35a5e1c6a91a2040a23a411e611765c.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/fe/57/3b/fe573ba4d18f944ce14a272a8827bb09.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/56/d2/af/56d2af2eb6cc3df1abeb60d79d31f4cf.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/be/c9/41/bec941e8dd47f5ac99a97670195ef819.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/83/98/68/839868f62d02002343a5ede02acb4e6e.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/4f/3a/0d/4f3a0d43765ba7cb301b95431a82ff3c.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/a5/ca/e4/a5cae4661fd877a13d344bc35e5cf774.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/cd/f0/43/cdf04342fbb3282a194fefe6408c1f3d.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/94/9f/8d/949f8d9a12988239cf71375b8d38a152.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/20/32/54/2032543e9d88767fab365f0b6e31ec0e.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        }, {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/66/18/fd/6618fdf753d54445877cf9bf43f53867.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/bb/1f/fd/bb1ffdc0e8381205cb1624a6f51715f2.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        },
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/3b/29/1e/3b291ef32cf4b4d336c2781a39cbcd14.jpg',
            price: '3ETH',
            currentTopBid : 'Bid ~0.001wETH',
            likes: 44
        }
        // {
        //     collectionName: String, 
        //     collectionAvatar: String,
        //     ownerName: String,
        //     ownerAvatar: String,
        //     creatorName: String,
        //     creatorAvatar: String,
        //     nftName: String,
        //     Price: String,
        //     currentTopBid : String,
        //     likes: Int
        // }
    ]


    const classes = useStyles()

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 }
    ];
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant='h4'>Live Auctions</Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}

            {/* Slider(Carousel) */}
                <Grid item xs={12}>
                    <Carousel  cols={2} rows={1} gap={10} loop className={classes.slider}>
                        {/* Map Slider Items (auctions) */}
                        {Auctions.map(auction =>(
                            <Grid item xs={12}>
                                <Carousel.Item>
                                    <Card elevation={6} className={classes.cards}>
                                    {/* Avatars and options */}
                                        <CardHeader
                                            avatar={
                                                <Avatar>
                                                    {auction.collectionAvatar}
                                                </Avatar>
                                                // <Avatar>{auction.ownerAvatar}</Avatar>
                                                // <Avatar>{auction.creatorName}</Avatar>
                                            }

                                            action={
                                                <IconButton>
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            }
                                        />
                                        {/* options icon */}
                                        {/* nft */}
                                        <CardMedia
                                            component= 'img'
                                            height="194"
                                            className={classes.img}
                                            image={auction.nftImg}
                                        />
                                        <CardContent>
                                            {/* nft name */}
                                            <Typography variant="body2">{auction.nftName}</Typography>
                                            {/* nft price */}
                                            <Typography variant="body2">{auction.price}</Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Typography>{auction.currentTopBid}</Typography>
                                            <IconButton>
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Carousel.Item>
                            </Grid>
                        ))}
                    </Carousel>
                </Grid>
                {/* <Grid item xs={0}></Grid> */}
            </Grid>
        </div>
    )
}

export default LiveAuctions;
