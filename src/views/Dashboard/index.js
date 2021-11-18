import React, { useContext } from 'react'
import {
    Grid,
    Typography,
} from '@mui/material'

// image imports
// import confirmed from '../../assets/icons/confirmed.png'

// component imports
import { AppContext } from '../../components/AppContext'
import DataCard from '../../layouts/Cards/DataCard'
import MultiBargraph from '../../layouts/Graphs/MultiBargraph'
import Donutgraph from '../../layouts/Graphs/Donutgraph'
import CountryDataCard from '../../layouts/Cards/CountryDataCard'


const Dashboard = () => {

    const { covidData, EACovidData } = useContext(AppContext)

    const data = covidData.map(item=>(
        { cases: item.name, population: item.numbers/10000 }
    ))    

    return (
        <Grid container spacing={2} style={{ padding: '120px 5.8%', paddingTop: '150px' }}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Grid
                    container
                    spacing={3}
                    style={{
                    }}
                >
                    {covidData.map((cardData, index)=>(
                        <DataCard
                            key={index}
                            Details={cardData}
                        />
                    ))}
                </Grid>
                <Grid
                    container
                    style={{
                        margin: '3% 0px',
                        padding: '0px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: 'var(--primary-color-boxshadow)',
                        overflow: 'hidden'
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={9} xl={9} style={{ padding: '1%' }}>
                        <MultiBargraph data={EACovidData}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ padding: '1%' }}>
                        <Donutgraph data={data}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Grid
                    item
                    style={{
                        padding: '2% 3%',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: 'var(--primary-color-boxshadow)',
                        fontFamily: 'var(--primary-font-family)',
                        color: 'var(--primary-color)'
                    }}
                    align='left'
                >
                    <Typography variant='h5' style={{ paddingBottom: '4px', fontFamily: 'var(--secondary-font-family)', fontWeight: '300', borderBottom: '1px var(--primary-color) solid'  }}>
                        Data distribution by: <span style={{ color: 'gray' }}>Country</span>
                    </Typography>
                    <Grid
                        container
                    >
                        {EACovidData.map((countryData, index)=>(
                            <CountryDataCard
                                key={index}                            
                                Details={countryData}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard
