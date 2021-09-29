import React, {useState, useRef} from "react";
import { Icon } from '@iconify/react';
// import {
//     Button,
//     Container,
//     makeStyles,
//     AppBar,
//     Toolbar,
//     Typography,
//     InputBase,
//     MenuItem,
//     ListItemText,
//     List,
//     IconButton
// } from "@material-ui/core";
// import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import {
    makeStyles,
    Box,
    List,
    Button,
    AppBar,
    Hidden,
    Toolbar,
    MenuItem,
    Container,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton
} from '@material-ui/core';
import {Link, useLocation, NavLink as RouterLink} from 'react-router-dom';
import PopoverMenu from "../../components/PopoverMenu";
import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';

// const Signed_In_Menu_Links = [
//     {title:'Explore', path:'/'},
//     {title: 'My Page', path:'/my-page'},
//     {title: 'My Bids', path:'/my-bids'},
//     // {title: 'Sign out', path:'/sign-out'}
// ]

// const Signed_Out_Menu_Links = [
//     {title: 'Explore', path:'/'},
//     // {title: 'Sign In', path:'sign-in'}
// ]


const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        flexShrink:1
    },
    appBar:{
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    searchContainer:{
        backgroundColor: '#D3D3D3',
        width: '30%',
        borderRadius: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon:{
        padding: theme.spacing(0, 2)
    },
    searchInput:{
        padding: theme.spacing(0, 1, 0, 1)
    },
    linksContainer:{
        // backgroundColor:'red',
        position: 'relative',
        right: theme.spacing(-15)
    },
    links:{
        marginRight: theme.spacing(5),
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer'
    },
    activeLinks:{
        textStyle: 'underline'
    }
}))

function TopBar(){
    const classes = useStyles();
    const anchorRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const MENU_LINKS = [
        {
            className: classes.links,
            activeClassName: classes.activeLinks,
            title:'Explore', 
            to:"/"
        },
        {
            className: classes.links,
            activeClassName:classes.activeLinks,
            title:'My Page', 
            to:"/my-page"
        },
        {
            className: classes.links,
            activeClassName:classes.activeLinks,
            title:'My Bids', 
            to:"/my-bids"
        }
    ]
    // const [signedIn, setSignedIn] = React.useState(false);

    const renderMenuDesktop = (
        <div className={classes.display}>
            {MENU_LINKS.map((link) => {
                return (
                    <Link
                        exact
                        to={link.to}
                        key={link.title}
                        underline="none"
                        variant="subtitle2"
                        component={RouterLink}
                        activeClassName={classes.isDesktopActive}
                        // className={clsx({
                        // [classes.isHome]: isHome
                        // })}
                        sx={{ mr: 5, color: 'text.primary' }}
                    >
                        {link.title}
                    </Link>
                )})}
        </div>
    );

    const renderMenuMobile = (
        <PopoverMenu
            width={220}
            open={openMenu}
            anchorEl={anchorRef.current}
            onClose={() => setOpenMenu(false)}
        >
            <List>
                {MENU_LINKS.map((link) => (
                    <MenuItem
                        exact
                        to={link.to}
                        key={link.title}
                        component={RouterLink}
                        onClick={() => setOpenMenu(false)}
                        activeClassName={classes.isMobileActive}
                        sx={{ color: 'text.secondary' }}
                    >
                        <ListItemIcon>
                            <Icon icon={link.icon} width={20} height={20} />
                        </ListItemIcon>
                        <ListItemText>{link.title}</ListItemText>
                    </MenuItem>
                ))}
            </List>
        </PopoverMenu>
    );
    // const Signed_In_Menu_Links = [
    //     {
    //         className: classes.links,
    //         activeClassName: classes.activeLinks,
    //         title:'Explore', 
    //         to:"/"
    //     },
    //     {
    //         className: classes.links,
    //         activeClassName:classes.activeLinks,
    //         title:'My Page', 
    //         to:"/my-page"
    //     },
    //     {
    //         className: classes.links,
    //         activeClassName:classes.activeLinks,
    //         title:'My Bids', 
    //         to:"/my-bids"
    //     }
    // ]
    
    // const Signed_Out_Menu_Links = [
    //     {title: 'Explore', path:"/"},
    //     // {title: 'Sign In', path:'sign-in'}
    // ]

    return (
        <AppBar
            color="transparent"
            sx={{ boxShadow: 'none' }}
        >
            <Toolbar disableGutters className={classes.toolbar}>
                <Container
                    maxWidth="lg"
                    sx={{
                        lineHeight: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Link to="/" className={classes.logo}>
                        <Typography
                        underline="none"
                        variant="h4"
                        // sx={{ color: 'common.white' }}
                        sx={{ display: 'flex', alignItems: 'center' }}
                        >
                        Goody's
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />

                    <Hidden mdDown><renderMenuDesktop/></Hidden>

                    <Button
                        underline="none"
                        variant="contained"
                        component={Link}
                    >
                        <Link>
                        Sign In
                        </Link>
                    </Button>

                    <Hidden mdUp>
                        <IconButton
                        ref={anchorRef}
                        onClick={() => setOpenMenu(true)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <renderMenuMobile/>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
        // <div className={classes.root}>
        //     <AppBar color='inherit' elevation={1}>
        //         <Toolbar className={classes.appBar}>
        //             <Typography>
        //                 Logo
        //             </Typography>

        //             <div className = {classes.searchContainer}>
        //                 <div className={classes.searchIcon}>
        //                     <SearchIcon />
        //                 </div>
        //                 <div className={classes.searchInput}>
        //                     <InputBase
        //                         placeholder = 'Collection, item or user'
        //                     />
        //                 </div>
        //             </div>

        //             <div className = {classes.linksContainer}>
        //                 {Signed_In_Menu_Links.map(link => (
        //                     <Link
        //                         className={link.className}
        //                         activeClassName={link.activeClassName}
        //                         to={link.to}
        //                     >
        //                         {link.title}
        //                     </Link>
        //                 ))}
                       
        //                 {/* { signedIn
        //                     ? 
        //                 Signed_In_Menu_Links.map((link) => (
        //                         <Link to={link.path} className={classes.links}>
        //                             {link.title}
        //                         </Link>
        //                     ))
        //                     { : Signed_Out_Menu_Links.map((link) => (
        //                         <Link to={link.path} className={classes.links}>
        //                             {link.title}
        //                         </Link>
        //                     ))
        //                 } } */}

        //             </div>
        //             <IconButton>
        //                     <Brightness4Icon />
        //             </IconButton>

        //         </Toolbar>
        //     </AppBar>
    )
}

export default TopBar;