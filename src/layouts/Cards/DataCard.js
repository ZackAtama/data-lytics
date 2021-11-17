import * as React from 'react'
import { NavLink, useLocation } from 'react-dom'
import { styled, alpha } from '@mui/material/styles'
import {
    Grid,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu
} from '@mui/material'

// image imports
import confirmed from '../../assets/icons/confirmed.png'

const DataCard = (props) => {

    const { data } = props

    return (
        <Grid
            item xs={12} sm={12} md={6} lg={3} xl={3}
            style={{
                padding: '1% 0px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: 'var(--primary-color-boxshadow)',
                fontFamily: 'var(--primary-font-family)',
                color: 'var(--primary-color)'
            }}
            align='center'
        >
            <Typography>
                <img src={data.icon} style={{ width: '25%' }}/>
            </Typography>
            <Typography variant='h4' style={{ fontWeight: '300' }}>
                {data.name}
            </Typography>
            <Typography variant='h5' style={{ fontFamily: 'var(--secondary-font-family)', fontWeight: '700', color: '#448AFF' }}>
                {data.numbers}
            </Typography>
            <Typography style={{ fontWeight: '300', color: '#555' }}>
                <strong style={{ color: 'var(--primary-color)' }}>{data.percentage}%</strong> of world cases
            </Typography>
        </Grid>
    )
}

export default DataCard
