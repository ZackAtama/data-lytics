import React, { createContext, useState, useEffect } from 'react'
import apiClient from "./AppAPI";

// image imports
import confirmed from '../../assets/icons/confirmed.png'
import recovered from '../../assets/icons/recovered.png'
import vaccinated from '../../assets/icons/vaccinated.png'
import active from '../../assets/icons/active.png'

import flag_burundi from '../../assets/countries/flag_burundi.jpg'
import flag_kenya from '../../assets/countries/flag_kenya.jpg'
import flag_rwanda from '../../assets/countries/flag_rwanda.jpg'
import flag_tanzania from '../../assets/countries/flag_tanzania.jpg'
import flag_uganda from '../../assets/countries/flag_uganda.jpg'

export const AppContext = createContext()

export const WorldCovidData = {    
    confirmed: 169567399,
    active: 38139064,
    recovered: 131428335,
    deaths: 3087097595
}

const AppContextProvider = (props) => {

    const [loading, setLoading] = useState(false)
    const [allCountries, setAllCountries] = useState([])
    const [covidData, setCovidData] = useState([])
    const [EACovidData, setEACovidData] = useState([])
    const [burundi, setBurundi] = useState({})
    const [kenya, setKenya] = useState({})
    const [rwanda, setRwanda] = useState({})
    const [tanzania, setTanzania] = useState({})
    const [uganda, setUganda] = useState({})

    useEffect(() => {
        setLoading(true);
        allCountriesData();
        // eslint-disable-next-line
    }, [allCountries])

    const allCountriesData = async () => {        
        await apiClient.get("").then(res => {
            setAllCountries(res.data.features);

        });
        await getEAData();
        setLoading(false);
    }

    const getEAData = async () => {
        setBurundi(allCountries.find(country => country.attributes.Country_Region === 'Burundi').attributes);
        setKenya(allCountries.find(country => country.attributes.Country_Region === 'Kenya').attributes);
        setRwanda(allCountries.find(country => country.attributes.Country_Region === 'Rwanda').attributes);
        setTanzania(allCountries.find(country => country.attributes.Country_Region === 'Tanzania').attributes);
        setUganda(allCountries.find(country => country.attributes.Country_Region === 'Uganda').attributes);
        await getEACovidData();
        await getCovidData();
    }

    const getEACovidData = async () => {
        setEACovidData([
            {
                flag: flag_burundi,
                name: 'Burundi',
                confirmed: burundi.Confirmed,
                active: burundi.Active,
                recovered: burundi.Recovered,
                deaths: burundi.Deaths,
            },
            {
                flag: flag_kenya,
                name: 'Kenya',
                confirmed: kenya.Confirmed,
                active: kenya.Active,
                recovered: kenya.Recovered,
                deaths: kenya.Deaths,
            },
            {
                flag: flag_rwanda,
                name: 'Rwanda',
                confirmed: rwanda.Confirmed,
                active: rwanda.Active,
                recovered: rwanda.Recovered,
                deaths: rwanda.Deaths,
            },
            {
                flag: flag_tanzania,
                name: 'Tanzania',
                confirmed: tanzania.Confirmed,
                active: tanzania.Active,
                recovered: tanzania.Recovered,
                deaths: tanzania.Deaths,
            },
            {
                flag: flag_uganda,
                name: 'Uganda',
                confirmed: uganda.Confirmed,
                active: uganda.Active,
                recovered: uganda.Recovered,
                deaths: uganda.Deaths,
            }
        ])
    }

    const getCovidData = async () => {
        setCovidData([
            {
                icon: confirmed,
                name: 'Confirmed',
                numbers: BarGraphData.confirmed,
                percentage: ((BarGraphData.confirmed*100)/WorldCovidData.confirmed).toFixed(2)
            },
            {
                icon: active,
                name: 'Active',
                numbers: BarGraphData.active,
                percentage: ((BarGraphData.active*100)/WorldCovidData.active).toFixed(2)
            },
            {
                icon: recovered,
                name: 'Recovered',
                numbers: BarGraphData.recovered,
                percentage: ((BarGraphData.recovered*100)/WorldCovidData.recovered).toFixed(2)
            },
            {
                icon: vaccinated,
                name: 'Death',
                numbers: BarGraphData.deaths,
                percentage: ((BarGraphData.deaths*100)/WorldCovidData.deaths).toFixed(2)
            }
        ]);
    };

    const BarGraphData = {
        confirmed: EACovidData.reduce((accumulator, current) => accumulator + current.confirmed, 0),
        active: EACovidData.reduce((accumulator, current) => accumulator + current.active, 0),
        recovered: EACovidData.reduce((accumulator, current) => accumulator + current.recovered, 0),
        deaths: EACovidData.reduce((accumulator, current) => accumulator + current.deaths, 0)
    }

    return (
        <AppContext.Provider
            value={{
                loading,
                covidData,
                BarGraphData
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
