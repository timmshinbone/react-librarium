import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import TradesList from '../TradesList'

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
	acceptTrade = async (id) => {
		console.log("This is trade id", id);
		const tradeToAccept = this.state.trades.find(tradeFound => tradeFound.id === id)
		tradeToAccept.status = 'accepted'
		try {
			const url = await fetch(process.env.REACT_APP_API_URL + '/api/v1/trades/' + id, {
				method: 'PUT',
				credentials: 'include',
				mode: 'cors',
				body: JSON.stringify(tradeToAccept.status),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	denyTrade(trade){
		console.log('trade denied')
		trade.status = 'denied'
		console.log("This is the trade denied", trade);
	}
	render(){
		console.log("\nThis is Trades in Trades container");
		console.log(this.state.trades);
		if(this.state.trades.length > 0){
			const trade = this.state.trades[0]
			console.log("this is trade.status");
			console.log(trade.status);
			
			return(
				<TradesList 
					trades={this.state.trades}
					acceptTrade={this.acceptTrade}
					denyTrade={this.denyTrade}
					loggedInUsername={this.props.loggedInUsername}
				/>
			)
		} else {
			return (
				null
			)
		}
	}
}


export default TradeContainer

			//<small>trades container</small>


