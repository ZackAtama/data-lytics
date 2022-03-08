import React, { useEffect, useState, useContext } from 'react'
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

    const { covidData, BarGraphData } = useContext(AppContext)

    const [isLoaded, setIsLoaded] = useState(false)
    const [donutData, setDonutData] = useState([])
    const [barGraphData, setBarGraphData] = useState({
        confirmed: 0,
        active: 0,
        recovered: 0,
        deaths: 0
    })

    useEffect(() => {
        setIsLoaded(false)
        const getDonutData = async () => {
            setDonutData(await covidData.map(item=>({ cases: item.name, population: item.numbers/10000 })))
        }
        const getBargraphData = async () => {
            setBarGraphData(await BarGraphData)
        }
        getDonutData();
        getBargraphData();
        setIsLoaded(true);
        // eslint-disable-next-line
    }, [isLoaded, donutData, barGraphData])

    return (
        <Grid container spacing={2} style={{ padding: '120px 5.8%', paddingTop: '150px' }}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Grid
                    container
                    spacing={3}
                    style={{
                    }}
                >
                    {isLoaded?
                        covidData.map((cardData, index)=>(
                            <DataCard
                                key={index}
                                Details={cardData}
                            />
                        ))
                    : <Typography variant={"h6"}>Loading Data...</Typography> }
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
                        {/* {isLoaded?<MultiBargraph data={barGraphData}/>:"Loading Bargraph Data...."} */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ padding: '1%' }}>
                        {/* {isLoaded?<Donutgraph data={donutData}/>:<Typography variant={"h6"}>Loading Data...</Typography>} */}
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
                        {/* {isLoaded?
                            barGraphData.map((countryData, index)=>(
                                <CountryDataCard
                                    key={index}                            
                                    Details={countryData}
                                />
                            ))
                        : "Loading Bargraph Data...." } */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard
