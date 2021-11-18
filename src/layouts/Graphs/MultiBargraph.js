import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	BarSeries,
	Title,
	Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const legendStyles = () => ({
	root: {
		display: 'flex',
		margin: 'auto',
		flexDirection: 'row',
	},
});
const legendRootBase = ({ classes, ...restProps }) => (
	<Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
	label: {
		whiteSpace: 'nowrap',
	},
});
const legendLabelBase = ({ classes, ...restProps }) => (
	<Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class MultiBargraph extends React.PureComponent {
	constructor(props) {
		super(props);

		const data = props.data

		this.state = {
			data,
		};
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
			<Chart
				data={chartData}
			>
				<ArgumentAxis />
				<ValueAxis />
				<BarSeries
					name="Confirmed"
					valueField="confirmed"
					argumentField="name"
					color="#2962ff"
				/>
				<BarSeries
					name="Active"
					valueField="active"
					argumentField="name"
					color="#ffab40"
				/>
				<BarSeries
					name="Recovered"
					valueField="recovered"
					argumentField="name"
					color="#00c853"
				/>
				<BarSeries
					name="Vaccinated"
					valueField="vaccinated"
					argumentField="name"
					color="#e040fb"
				/>
				<Animation />
				<Legend position="bottom" rootComponent={Root} labelComponent={Label} />
				<Title text="Covid 19 Report: East Afican Region" />
				<Stack />
			</Chart>
		</Paper>
		);
	}
}
