
// style imports
import './App.css'

// component imports
import AppContextProvider from './components/AppContext'
import Header from './layouts/Header'
import Dashboard from './views/Dashboard'
import Footer from './layouts/Footer'

function App() {
	return (
		<div className="App">
			<AppContextProvider>
				<Header/>
				<Dashboard/>
				<Footer/>
			</AppContextProvider>
		</div>
	);
}

export default App;
