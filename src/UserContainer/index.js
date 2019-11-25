import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import CopyContainer from '../CopyContainer'
import UserList from '../UserList'
import CheckoutUserModal from '../CheckoutUserModal'
import TradeContainer from '../TradeContainer'

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
	render(props){
		return(
			<Segment >
				<TradeContainer />
				<Grid columns={5} divided >
					<Grid.Column width={1}/>
					<Grid.Column width={9}>
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
					copies={this.state.copies}
					close={this.closeUserModal}
				/>
			</Segment>
		)
	}
}




export default UserContainer










