import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

export default class Bargraph extends React.PureComponent {
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
				padding: '1% 0px',
				boxShadow: 'none',
				fontFamily: 'var(--primary-font-family)',
				color: 'var(--primary-color)'				
			}}
		>
			<Chart data={chartData}>
				<ArgumentAxis />
				<ValueAxis max={10} style={{ height: this.props.height?this.props.height:'' }} />
				<BarSeries
					valueField="population"
					argumentField="cases"
				/>
				<Title text="Bar Chart" />
				<Animation color='success' />
			</Chart>
		</Paper>
		);
	}
}
