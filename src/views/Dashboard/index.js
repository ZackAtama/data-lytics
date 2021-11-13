import * as React from 'react'
import { NavLink, useLocation } from 'react-dom'
import { styled, alpha } from '@mui/material/styles'
import {
    Grid,
    Typography,
} from '@mui/material'

// image imports
// import confirmed from '../../assets/icons/confirmed.png'

// component imports
import DataCard from '../../layouts/Cards/DataCard'


const Dashboard = () => {

    return (
        <Grid container style={{ padding: '8% 5.5%' }}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                {/* <Typography variant='h3'>
                    Dashboard
                </Typography> */}
                <DataCard/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            </Grid>
        </Grid>
    )
}

export default Dashboard
