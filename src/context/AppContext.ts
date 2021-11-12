import React, { createContext, useState, useEffect } from 'react'

// component imports
import axios from './AxiosInstance'

interface AppContextInterface {
    countries: {
        name: string
        confirmed: number | null
        recovered: number | null
        active: number | null
        deaths: number | null
        update: number
    }[]
}

export const AppContext = createContext<AppContextInterface | null>(null)

const AppContextProvider = (props: any) => {

    const config = { headers: {
        'Content-Type': 'application/json'
    } }
    
    const [dataLoaded, setDataLoaded] = useState(false)
    const [countriesData, setCountriesData] = useState<AppContextInterface['countries']>([])

    useEffect(() =>{
        setDataLoaded(false)
    }, [])

	const getCountries = async () => {
        await axios.get(``).then(res => {
            setCountriesData(res.data)
            setDataLoaded(true)
            console.log(res.data)
		})
	}

    // return (
    //     <AppContext.Provider
    //         value={{
    //             dataLoaded,
    //             countriesData,
    //         }}
    //     >
    //     </AppContext.Provider>
    // )
}

export default AppContextProvider
