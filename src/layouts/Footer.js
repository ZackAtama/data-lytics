import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined'

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
                <Toolbar style={{ width: '100%', color: 'white' }}>
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
