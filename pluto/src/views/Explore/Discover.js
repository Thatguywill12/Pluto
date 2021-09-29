import React from 'react';
import {
    Grid,
    Card,
    Typography,
    Avatar,
    makeStyles,
    CardMedia,
    IconButton,
    CardContent,
    CardActions,
    CardHeader,
    Breadcrumbs,
    MenuItem,
    Menu,
    Button,
    styled,
    alpha
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme)=> ({
    root:{
        // padding:theme.spacing(3)
    },
    title:{
        marginBottom:theme.spacing(4)
    },
    cards:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        width: theme.spacing(34),
        height: theme.spacing(55),
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
    img:{
        width: '90%',
        // height:theme.spacing(30),
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(3)
    },
    discover:{
        marginTop:'2%',
        // backgroundColor:'red'
    }
}))

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  


function Discover() {
    const classes = useStyles();

    const Discover_NFTS = [
        {
            collectionName: 'Bundersl', 
            collectionAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            ownerName: 'DeckFunk',
            ownerAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            creatorName: 'Viewebel',
            creatorAvatar: 'https://i.pinimg.com/736x/f6/08/eb/f608eb4a06fd25f2d7bb935f14d5fde8.jpg',
            nftName: 'Bozsy',
            nftImg: 'https://i.pinimg.com/236x/d5/d3/a1/d5d3a16de52ffeeaf345fb22ce90c476.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/84/d2/0c/84d20cfacf766b55b35c014e8a138fee.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/0c/3e/d5/0c3ed5639b8fc4a27ba4c12f85a5b3f8.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/f7/20/a7/f720a75451854f883812bb26cd1f6c3d.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/71/e7/bd/71e7bdaf949a65136fdea3308e6e62be.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/da/17/cc/da17ccc4ca2712935ac678845833de98.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/0d/cd/7c/0dcd7c31269eb4c692e702c4621f9d7d.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/aa/8d/bb/aa8dbb2cdf41e9f99457cc8485a072c4.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/0d/65/bb/0d65bbe537ae3d6df1b84cb10f4fea1e.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/28/18/72/2818727a1d42ea586e07f0df6a5f0376.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/50/7b/ad/507bad0e8370ce0e8815d91a81e67b87.jpg',
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
            nftImg: 'https://i.pinimg.com/236x/81/0c/9d/810c9d3a1e604dea30d0b3d8f09e539d.jpg',
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant='h4'>Discover</Typography>
                </Grid>
                <Grid item>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Catergory
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Art</MenuItem>
                        <MenuItem onClick={handleClose}>Photography</MenuItem>
                        <MenuItem onClick={handleClose}>Games</MenuItem>
                        <MenuItem onClick={handleClose}>Metaverses</MenuItem>
                        <MenuItem onClick={handleClose}>Music</MenuItem>
                    </StyledMenu>
                </Grid>
                
                <Grid item>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Collection
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Art Blocks</MenuItem>
                        <MenuItem onClick={handleClose}>MutantApeYachtClub</MenuItem>
                        <MenuItem onClick={handleClose}>BoredApeYachtClub</MenuItem>
                        <MenuItem onClick={handleClose}>Loot</MenuItem>
                        <MenuItem onClick={handleClose}>Meebits</MenuItem>
                        <MenuItem onClick={handleClose}>Cool Cats</MenuItem>
                        <MenuItem onClick={handleClose}>Creature World</MenuItem>
                        <MenuItem onClick={handleClose}>Emblem Vault V2</MenuItem>
                    </StyledMenu>
                </Grid>

                <Grid item>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Sale type
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Art Blocks</MenuItem>
                        <MenuItem onClick={handleClose}>MutantApeYachtClub</MenuItem>
                        <MenuItem onClick={handleClose}>BoredApeYachtClub</MenuItem>
                        <MenuItem onClick={handleClose}>Loot</MenuItem>
                        <MenuItem onClick={handleClose}>Meebits</MenuItem>
                        <MenuItem onClick={handleClose}>Cool Cats</MenuItem>
                        <MenuItem onClick={handleClose}>Creature World</MenuItem>
                        <MenuItem onClick={handleClose}>Emblem Vault V2</MenuItem>
                    </StyledMenu>
                </Grid>

                <Grid item>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Price range
                    </Button>
                    <StyledMenu
                        // id="demo-customized-menu"
                        // MenuListProps={{
                        // 'aria-labelledby': 'demo-customized-button',
                        // }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Low - High</MenuItem>
                        <MenuItem onClick={handleClose}>High - Low</MenuItem>
                    </StyledMenu>
                </Grid>

            </Grid>
            <Grid container spacing={2} className={classes.discover}>
                {Discover_NFTS.map(nfts =>
                    <Grid item xs={12} md={2}>
                        <Card className={classes.cards}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    {nfts.collectionAvatar}
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
                            image={nfts.nftImg}
                        />
                        <CardContent>
                            {/* nft name */}
                            <Typography variant="body2">{nfts.nftName}</Typography>
                            {/* nft price */}
                            <Typography variant="body2">{nfts.price}</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography>{nfts.currentTopBid}</Typography>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                    
                )}
            </Grid>
        </div>
    )
}

export default Discover
