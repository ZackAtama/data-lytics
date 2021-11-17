import React from 'react'
import { Outlet } from 'react-router-dom'

// component imports
import AppContextProvider from '../components/AppContext'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {

	return (
        <AppContextProvider>
			<Header/>
            <Outlet/>
            <Footer/>
        </AppContextProvider>
	)
}

export default MainLayout
