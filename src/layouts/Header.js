import * as React from 'react'
import { NavLink } from 'react-dom'
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Button,
    Badge,
    MenuItem,
    Menu
} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'

// image imports
import headerBg from '../assets/header_bg.png'
import logoLg from '../assets/logo_lg_beta.png'
import logoSm from '../assets/logo_sm_beta.png'

const Header = () => {


    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}            
        >
            <MenuItem style={{ color: '#009688' }}>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    style={{ color: '#009688' }}
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p style={{ fontSize: '12px' }}>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    style={{ color: '#009688' }}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p style={{ fontSize: '12px' }}>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    style={{ color: '#009688' }}
                >
                    <AccountCircle />
                </IconButton>
                <p style={{ fontSize: '12px' }}>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                style={{
                    backgroundImage: `url(${headerBg})`,                    
                    backgroundRepeat: 'repeat',
                    borderBottom: '1px #009688 solid',
                    boxShadow: 'none'
                }}
            >
                <Toolbar
                    container
                    style={{
                        maxHeight: '120px',
                        padding: '5px 5.5%',
                    }}
                >
                    <Button
                        sx={{ display: { xs: 'none', lg: 'flex' } }}
                        to={'/'}
                        component={NavLink}
                        // className={LinkClasses.logoLg}
                        style={{
                            width: '270px',
                            borderRadius: '8px'
                        }}
                    >                        
                        <img src={logoLg} alt='' style={{ width: '100%' }}/>
                    </Button>
                    <Button
                        sx={{ display: { md: 'flex', lg: 'none' } }}
                        to={'/'}
                        component={NavLink}
                        // className={LinkClasses.logoLg}
                        style={{
                            width: '110px',
                            borderRadius: '8px'
                        }}
                    >                        
                        <img src={logoSm} alt='' style={{ width: '100%' }}/>
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }} style={{ color: '#009688' }}>
                        <IconButton  style={{ display: 'block', color: 'inherit', justifyContent: 'center' }} align='center'>
                            <DashboardRoundedIcon  style={{ fontSize: '1.4em', padding: '0px' }}/>
                            <p style={{ margin: '0px', fontSize: '12px' }}>Dashboard</p>
                        </IconButton>
                        <IconButton  style={{ display: 'block', color: 'inherit', justifyContent: 'center' }} align='center'>
                            <Badge badgeContent={4} color="error">
                                <MailIcon  style={{ fontSize: '1.4em', padding: '0px' }}/>
                            </Badge>
                            <p style={{ margin: '0px', fontSize: '12px' }}>Inbox</p>
                        </IconButton>
                        <IconButton  style={{ display: 'block', color: 'inherit', justifyContent: 'center' }} align='center'>
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon style={{ fontSize: '35px' }}/>
                            </Badge>
                            <p style={{ margin: '0px', fontSize: '12px' }}>Inbox</p>
                        </IconButton>
                        <IconButton                        
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen} 
                            style={{
                                display: 'block',
                                width: '18.5%',
                                color: 'inherit',
                                justifyContent: 'center'
                            }}
                            align='center'
                        >
                            <AccountBoxOutlinedIcon  style={{ fontSize: '2em' }}/>
                            <p style={{ margin: '0px', fontSize: '10px' }}>Account</p>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', lg: 'none' } }} style={{ color: '#009688' }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                            <AppsIcon  style={{ fontSize: '40px' }}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}

export default Header
