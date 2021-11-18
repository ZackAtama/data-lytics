import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default class Donutgraph extends React.PureComponent {
	constructor(props) {
		super(props);

		const data = props.data

		this.state = { data }
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<Paper
				style={{
					padding: '5%',
					boxShadow: 'none',
					fontFamily: 'var(--primary-font-family)',
					color: 'var(--primary-color)'
				}}
			>
				<Chart
					data={chartData}
					style={{ padding: '0px' }}
				>					
					<Title
						text="Donut Chart"
					/>
					<PieSeries
						valueField="population"
						argumentField="cases"
						innerRadius={0.6}
						style={{ marginTop: '-20px', width: '80%' }}
					/>
					<Animation />
				</Chart>
			</Paper>
		);
	}
}
