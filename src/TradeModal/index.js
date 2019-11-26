import React from 'react'
import { Card, Button, Image, Modal } from 'semantic-ui-react'

function TradeModal(props){
	console.log("this is props in  TradeModal >>> ");
	console.log(props);
	if(props.copies.length > 0){
		const userCopies = props.copies.filter((copy) => copy.owner.username === props.loggedInUsername)
		console.log("this is userCopies in TradeModal>>>", userCopies);
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
						<Button color="olive" onClick={() => props.createTrade(props.tradeCopy, copy.id)}>Trade This Copy</Button>
					</Card.Content>
				</Card>
			)
		})
		return(
			<Modal open={props.open} closeIcon onClose={props.close}>
				<Card.Group>
			 		{ copies }
				</Card.Group>
			</Modal>
		)
	} else {
		return(
			null
		)
	}
}
export default TradeModal








