import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'

class TradeContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			trades: []
		}
	}
	componentDidMount(){
		this.getTrades();
	}
	getTrades = async () => {
		try {
			const trades = await fetch(process.env.REACT_APP_API_URL + '/api/v1/trades/', {
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedTrades = await trades.json();
			console.log("this is parsedTrades.data\n", parsedTrades.data);
			this.setState({
				trades: parsedTrades.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	render(){
		console.log("\nThis is Trades in Trades container");
		console.log(this.state.trades);
		return(
			<small>trades container</small>
		)
	}
}


export default TradeContainer