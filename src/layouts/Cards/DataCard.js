import * as React from 'react'
import {
    Grid,
    Typography,
} from '@mui/material'

const DataCard = (props) => {

    const { Details } = props

    const Numbers = () => {
        switch(Details.name){
            case 'Recovered':
                return (
                    <Typography variant='h5' style={{ fontFamily: 'var(--secondary-font-family)', fontWeight: '500', color: '#00c853' }}>
                        {new Intl.NumberFormat().format(Details.numbers)}
                    </Typography>
                )
            case 'Vaccinated':
                return (
                    <Typography variant='h5' style={{ fontFamily: 'var(--secondary-font-family)', fontWeight: '500', color: '#e040fb' }}>
                        {new Intl.NumberFormat().format(Details.numbers)}
                    </Typography>
                )
            case 'Active':
                return (
                    <Typography variant='h5' style={{ fontFamily: 'var(--secondary-font-family)', fontWeight: '500', color: '#ffab40' }}>
                        {new Intl.NumberFormat().format(Details.numbers)}
                    </Typography>
                )
            default:
                return (
                    <Typography variant='h5' style={{ fontFamily: 'var(--secondary-font-family)', fontWeight: '500', color: '#2962ff' }}>
                        {new Intl.NumberFormat().format(Details.numbers)}
                    </Typography>
                )
        }
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Grid
                item
                style={{
                    padding: '5%',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: 'var(--primary-color-boxshadow)',
                    fontFamily: 'var(--primary-font-family)',
                    color: 'var(--primary-color)'
                }}
                align='center'
            >
                <Typography>
                    <img src={Details.icon} alt='' style={{ width: '25%' }}/>
                </Typography>
                {<Numbers/>}
                <Typography variant='h5' style={{ fontWeight: '300' }}>
                    {Details.name}
                </Typography>
                <Typography style={{ fontWeight: '300', color: '#555' }}>
                    <strong style={{ color: 'var(--primary-color)' }}>{Details.percentage}%</strong> of world cases
                </Typography>
            </Grid>
        </Grid>
    )
}

export default DataCard
