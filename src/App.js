
import {
	Grid,
	Typography
} from '@mui/material'

// style imports
import './App.css'

// component imports
import Header from './layouts/Header'
import Dashboard from './views/Dashboard'
import Footer from './layouts/Footer'

function App() {
	return (
		<div className="App">
			<Header/>
			<Dashboard/>
			<Footer/>
		{/* <Grid container style={{ padding: '0px 10%' }}>
			<Grid item sx={12} sm={12} md={12} lg={12} lx={12}>
				<Typography style={{ padding: '10px 0px', borderBottom: '1px #009688 solid' }} align='left'>
					<img src={logo_lg} style={{ width: '250px' }}/>
				</Typography>
			</Grid>
		</Grid> */}
		</div>
	);
}

export default App;
