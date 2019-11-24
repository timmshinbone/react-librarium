import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import CopyContainer from '../CopyContainer'
import UserList from '../UserList'

class UserContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			copies: [],
			users: [],
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
			console.log(parsedUsers);
			this.setState({
				users: parsedUsers.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	render(props){
		console.log("this is this.state in user container");
		console.log(this.state);
		return(
			<Segment>
				<Grid>
					<Grid.Column width={1}/>
					<Grid.Column width={9}>
						<CopyContainer 					
							loggedin={this.props.loggedin}
							loggedInUsername={this.props.loggedInUsername}
							logout={this.props.logout} 
						/>
					</Grid.Column>
					<Grid.Column width={1}/>
					<Grid.Column width={3}>
						<UserList
							loggedin={this.props.loggedin}
							loggedInUsername={this.props.loggedInUsername}
							users={this.state.users}
						/>
					</Grid.Column>
					<Grid.Column width={1}/>
				</Grid>
			</Segment>
		)
	}
}




export default UserContainer










