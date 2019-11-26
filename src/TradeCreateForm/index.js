import React, { Component } from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
import TradeModal from '../TradeModal'

class TradeCreateForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tradeModalOpen: false,
		}
	}
	createTrade = async (bookWanted, bookOffering) => {
		try{
			const createdTradeResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/trades/' + bookWanted + '/' + bookOffering, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({
					copy_from: bookWanted,
					copy_to: bookOffering
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedResponse = await createdTradeResponse.json();
			console.log("This is parsedResponse in createTradeForm");
			console.log(parsedResponse);
		}
		catch (err) {
			console.log('error');
			console.log(err);
		}
	}
	modalOpen(){
		this.setState({
			tradeModalOpen: true
		})
	}
	modalClose(){
		this.setState({
			tradeModalOpen: false
		})
	}
	render(){
		console.log("This is props.tradeCopy", this.props.tradeCopy);
		return(
			<TradeModal 
				open={this.props.open}
				loggedInUsername={this.props.loggedInUsername}
				close={this.props.close}
				copies={this.props.copies}
				tradeCopy={this.props.tradeCopy}
				createTrade={this.createTrade}
			/>
		)
	}
}



export default TradeCreateForm