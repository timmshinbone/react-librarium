import React from 'react'
import { Button, Image, Card, Modal, Segment, Grid, Header } from 'semantic-ui-react'


function CheckoutUserModal(props){
	if(props.selectedUser.id > 0) {	
		const userCopies = props.copies.filter((copy) => copy.owner.id === props.selectedUser.id)
		console.log("This is userCopies", userCopies);
		const copies = userCopies.map((copy) => {
			return(
				<Card key={copy.id}>
					<Image src={copy.book.image} wrapped ui={false}/>
					<Card.Content>
						<Card.Header>{copy.book.title}</Card.Header>
						<Card.Description>{copy.book.author}</Card.Description>
						<small>page count: {copy.book.pages}</small><br/>
						<small>published: {copy.book.published}</small><br/>
						<small>isbn: {copy.book.isbn}</small><br/>
						<small>owner: {copy.owner.username}</small><br/>
					</Card.Content>
					<Card.Content extra>
						<Button color="olive">Trade</Button>
						<Button color="orange">Borrow</Button>
					</Card.Content>
				</Card>
			)
		})
		return(
			<Modal open={props.open} closeIcon onClose={props.close}>
				<Header>This is {props.selectedUser.username}'s Librarium</Header>
				<Segment >
					<Grid columns={2} divided>
						{copies}
					</Grid>
				</Segment>
			</Modal>
		)
	} else {
		return(
			null
		)
	}
}




export default CheckoutUserModal