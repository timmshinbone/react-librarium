import React from 'react';
import { List, Icon } from 'semantic-ui-react'

function UserList(props){
	const nonLoggedUsers = props.users.filter((user) => user.username !== props.loggedInUsername)
	console.log("This is nonLoggedUsers in UserListSidebar");
	console.log(nonLoggedUsers);
	const users = nonLoggedUsers.map((user) => {
		return(
			<List.Item key={user.id}>
				<List.Header><Icon name='user outline'/>{user.username}</List.Header>
				<List.Description><small>Click to See {user.username}'s books!</small></List.Description>
			</List.Item>

		)
	})
	return(
		<List>
			{ users }
		</List>
	)
}



export default UserList

