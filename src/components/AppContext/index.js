import React, { createContext, useState, useEffect } from 'react'

// component imports

// Pages content
import {
    covidData,
} from './AppData'

export const AppContext = createContext()

const AppContextProvider = (props) => {

	const [isAuth, setIsAuth] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
    const [covidData, setCovidData] = useState([])

    useEffect(() =>{
        setIsLoaded(false)
        getCovidData()
    }, [])

    // Account
	const getCovidData = async () => {
        await setCovidData(covidData)
        setIsLoaded(true)
	}

    return (
        <AppContext.Provider
            value={{
                isAuth,
                covidData,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
