import React from 'react'
import { Segment, Header, Icon, Button } from 'semantic-ui-react'

const HeaderContainer = (props) => {
	return(
			<Header as='h1'>
			{props.loggedin ?
				<Segment.Group>
					<Segment>
						<Icon name='user outline' />
						<Header.Content>{props.loggedInUsername}</Header.Content>
					</Segment>
					<Segment>
						<Button basic color='orange' onClick={props.logout}>Log Out</Button>
					</Segment>
				</Segment.Group>
				:
				<Segment>
					<Icon name='book' />
					<Header.Content>Librarium</Header.Content>
				</Segment>
			}
		</Header>
	)
}

export default HeaderContainer

//<Icon name={props.loggedin ? 'user outline' : 'book'} />



























