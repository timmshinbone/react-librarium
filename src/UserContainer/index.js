import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import CopyContainer from '../CopyContainer'
import UserList from '../UserList'
import CheckoutUserModal from '../CheckoutUserModal'
import TradeContainer from '../TradeContainer'
import WorldContainer from '../WorldContainer'

class UserContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			copies: [],
			users: [],
			selectedUser: {
				id: '',
				username: ''
			},
			checkoutUserModalOpen: false,
			tradeModalOpen: false,
			tradeCopy: null
		}
	}
	componentDidMount(){
		this.getCopies();
		this.getUsers();
	}
	getCopies = async () => {
		try {
			const copies = await fetch(process.env.REACT_APP_API_URL + '/api/v1/copies/', {
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedCopies = await copies.json();
			this.setState({
				copies: parsedCopies.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	getUsers = async () => {
		try {
			const users = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedUsers = await users.json();
			this.setState({
				users: parsedUsers.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	showUser = (user) => {
		const selectUser = this.state.users.filter((select) => select.id === user)
		const selectUserId = selectUser[0].id
		const selectUserUsername = selectUser[0].username
		this.setState({
			checkoutUserModalOpen: true,
			selectedUser: {
				id: selectUserId,
				username: selectUserUsername
			}
		})
	}
	closeUserModal = () => {
		this.setState({
			checkoutUserModalOpen: false
		})
	}
	openTradeModal = (copyId) => {
		console.log("ATTEMPTED TO OPEN TRADE MODAL")
		this.setState({
			tradeModalOpen: true,
			tradeCopy: copyId
		})
		console.log("THIS IS tradeModalOpen state", this.state.tradeModalOpen);
	}
	closeTradeModal = () => {
		this.setState({
			tradeModalOpen: false
		})
	}
	render(props){
		return(
			<Segment >
				<TradeContainer 
					loggedInUsername={this.props.loggedInUsername}
				/>
				<Grid columns={5} divided >
					<Grid.Column width={1}/>
					<Grid.Column width={9}>
						<WorldContainer />
						<CopyContainer 					
							loggedin={this.props.loggedin}
							loggedInUsername={this.props.loggedInUsername}
							logout={this.props.logout}
							users={this.state.users}
						/>
					</Grid.Column>
					<Grid.Column width={1}/>
					<Grid.Column width={3}>
						<UserList
							loggedin={this.props.loggedin}
							loggedInUsername={this.props.loggedInUsername}
							users={this.state.users}
							showUser={this.showUser}
							copies={this.state.copies}
						/>
					</Grid.Column>
					<Grid.Column width={1}/>
				</Grid>
				<CheckoutUserModal 
					open={this.state.checkoutUserModalOpen}
					selectedUser={this.state.selectedUser}
					loggedInUsername={this.props.loggedInUsername}
					copies={this.state.copies}
					tradeCopy={this.state.tradeCopy}
					close={this.closeUserModal}
					openTradeModal={this.openTradeModal}
					tradeModalState={this.state.tradeModalOpen}
					closeTradeModal={this.closeTradeModal}
				/>
			</Segment>
		)
	}
}




export default UserContainer










