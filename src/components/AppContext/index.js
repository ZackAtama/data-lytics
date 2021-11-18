import React, { createContext, useState, useEffect } from 'react'

// component imports

// Pages content
import {    
    CovidData,
    CountriesCovidData
} from './AppData'

export const AppContext = createContext()

const AppContextProvider = (props) => {

	const [isAuth] = useState(false)
    const [covidData] = useState(CovidData)
    const [EACovidData] = useState(CountriesCovidData)

    useEffect(() =>{
        // setCovidData(CovidData)
    }, [])

    // Account
	// const getCovidData = async () => {
    //     await setCovidData(covidData)
    //     setIsLoaded(true)
	// }

    return (
        <AppContext.Provider
            value={{
                isAuth,
                covidData,
                EACovidData
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
