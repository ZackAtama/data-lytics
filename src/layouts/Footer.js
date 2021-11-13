import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                sx={{ display: { lg: 'none' }, top: 'auto', bottom: 0 }}
                style={{
                    padding: '5px 4%',
                    backgroundColor: 'var(--primary-color)',
                }}
                align='center'
            >
                <Toolbar style={{ width: '100%' }}>
                    <IconButton  style={{ display: 'block', width: '18.5%', color: 'var(--secondary-color)', justifyContent: 'center' }} align='center'>
                        <DashboardRoundedIcon  style={{ fontSize: '1.6em', padding: '0px' }}/>
                        <p style={{ margin: '0px', fontSize: '10px' }}>Dashboard</p>
                    </IconButton>
                    <IconButton  style={{ display: 'block', width: '18.5%', color: 'inherit', justifyContent: 'center' }} align='center'>
                        <InsertChartOutlinedRoundedIcon  style={{ fontSize: '1.6em' }}/>
                        <p style={{ margin: '0px', fontSize: '10px' }}>My Data</p>
                    </IconButton>
                    <IconButton  style={{ display: 'block', width: '18.5%', color: 'inherit', justifyContent: 'center' }} align='center'>
                        <AddchartOutlinedIcon  style={{ fontSize: '1.6em' }}/>
                        <p style={{ margin: '0px', fontSize: '10px' }}>New Data</p>
                    </IconButton>
                    <IconButton  style={{ display: 'block', width: '18.5%', color: 'inherit', justifyContent: 'center' }} align='center'>
                        <AccountBoxOutlinedIcon  style={{ fontSize: '1.6em' }}/>
                        <p style={{ margin: '0px', fontSize: '10px' }}>Account</p>
                    </IconButton>
                    <IconButton  style={{ display: 'block', width: '18.5%', color: 'inherit', justifyContent: 'center' }} align='center'>
                        <SettingsApplicationsOutlinedIcon  style={{ fontSize: '1.6em' }}/>
                        <p style={{ margin: '0px', fontSize: '10px' }}>Settings</p>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
