import * as React from 'react'
import {
    Grid,
    Typography
} from '@mui/material'

// image imports
import confirmed from '../../assets/icons/confirmed.png'
import recovered from '../../assets/icons/recovered.png'
import vaccinated from '../../assets/icons/vaccinated.png'
import active from '../../assets/icons/active.png'

const CountryDataCard = (props) => {

    const { Details } = props

    return (
        <Grid
            item xs={12} sm={12} md={12} lg={12} xl={12}
            style={{
                padding: '15px 1.5%',
                fontFamily: 'var(--primary-font-family)',
                color: 'var(--primary-color)'
            }}
            align='left'
        >
            <Typography variant='h5' style={{ fontFamily: 'var(--primary-font-family)', fontWeight: '400' }}>
                {Details.name}
                <img src={Details.flag} alt='' style={{ height: '18px', borderRadius: '4px', marginLeft: '4px' }} />
            </Typography>
            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
                    <Typography style={{ fontFamily: 'var(--primary-font-family)', fontWeight: '400', paddingTop: '15px', fontSize: '14px' }}>
                        <img src={confirmed} alt='' style={{ float: 'left', width: '45px', marginRight: '2px', marginTop: '-5px' }}/>
                        <span style={{ color: '#2962ff' }}>{new Intl.NumberFormat().format(Details.confirmed)}</span><br/>
                        Confirmed
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
                    <Typography style={{ fontFamily: 'var(--primary-font-family)', fontWeight: '400', paddingTop: '15px', fontSize: '14px' }}>
                        <img src={active} alt='' style={{ float: 'left', width: '45px', marginRight: '2px', marginTop: '-5px' }}/>
                        <span style={{ color: '#ffab40' }}>{new Intl.NumberFormat().format(Details.active)}</span><br/>
                        Active
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
                    <Typography style={{ fontFamily: 'var(--primary-font-family)', fontWeight: '400', paddingTop: '15px', fontSize: '14px' }}>
                        <img src={recovered} alt='' style={{ float: 'left', width: '45px', marginRight: '2px', marginTop: '-5px' }}/>
                        <span style={{ color: '#00c853' }}>{new Intl.NumberFormat().format(Details.recovered)}</span><br/>
                        Recovered
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
                    <Typography style={{ fontFamily: 'var(--primary-font-family)', fontWeight: '400', paddingTop: '15px', fontSize: '14px' }}>
                        <img src={vaccinated} alt='' style={{ float: 'left', width: '45px', marginRight: '2px', marginTop: '-5px' }}/>
                        <span style={{ color: '#e040fb' }}>{new Intl.NumberFormat().format(Details.vaccinated)}</span><br/>
                        Vaccinated
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CountryDataCard
