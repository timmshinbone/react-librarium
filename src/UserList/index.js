import React from 'react';
import { List, Icon, Header } from 'semantic-ui-react'

function UserList(props){
	const nonLoggedUsers = props.users.filter((user) => user.username !== props.loggedInUsername)
	const users = nonLoggedUsers.map((user) => {
		const userCopies = props.copies.filter((copy) => copy.owner.id === user.id)
		return(
			<List.Item key={user.id} onClick={() => props.showUser(user.id)}>
				<List.Header><Icon name='user outline'/>{user.username}</List.Header>
				<List.Description>
					<small>Book Count: {userCopies.length}</small>
				</List.Description>
			</List.Item>
		)
	})
	return(
		<List celled selection verticalAlign='middle' size="huge" >
			<Header size='small'>Librariums</Header>
			{ users }
		</List>
	)
}



export default UserList

