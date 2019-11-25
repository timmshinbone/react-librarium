import React, { Component } from 'react'
import { Button, Image, Card, Modal } from 'semantic-ui-react'


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
						<Button color="olive">Edit Copy</Button>
						<Button color="orange" onClick={() => props.deleteCopy(copy.id)}>Lost My Copy!</Button>
					</Card.Content>
				</Card>
			)
		})
		return(
			<Modal open={props.open} closeIcon onClose={props.close}>
				<h1>This is the {props.selectedUser.username} Modal</h1>
				{copies}
			</Modal>
		)
	} else {
		return(
			null
		)
	}
}




export default CheckoutUserModal