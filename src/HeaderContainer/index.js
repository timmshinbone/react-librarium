import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderContainer = (props) => {
	return(
		<Header as='h2'>
			<Icon name={props.loggedin ? 'user outline' : 'book'} />
			{props.loggedin ?
				<Header.Content>{props.loggedInUsername}</Header.Content>
				:
				<Header.Content>Librarium</Header.Content>
			}
		</Header>
	)
}

export default HeaderContainer