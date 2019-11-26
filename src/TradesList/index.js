import React from 'react';
import { List, Icon, Header, Button } from 'semantic-ui-react'

function TradesList(props){
	console.log("This is props.trades in tradelist>>", props.trades);
	const userTrades = props.trades.filter(trade => trade.to_user.username === props.loggedInUsername)
	const userPendingTrades = userTrades.filter(trade => trade.status === 'pending')
	const trades = userPendingTrades.map((trade) => {
		return(
			<List.Item key={trade.id} >
				<List.Content floated='right'>
					<Button color="orange" onClick={() => props.denyTrade(trade)}>Deny</Button>
					<Button color="teal" onClick={() => props.acceptTrade(trade.id)}>Accept</Button>
				</List.Content>
				<Icon name='handshake outline' floated='left'/>
				<List.Content >{trade.id} New Trade from {trade.from_user.username}</List.Content>
				<small>
					will trade: <span>{trade.copy_from.book.title}</span><br/>
					you give: <span>{trade.copy_to.book.title}</span>
				</small>
			</List.Item>
		)
	}) 
	return(
		<List divided verticalAlign='middle' >
			{ trades }
		</List>
	)
}



export default TradesList





