import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react'

function CopyList(props){
	if(props.copies.length > 0){
		const copies = props.copies.map((copy) => {
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
			<Card.Group>
				{ copies }
			</Card.Group>
		)
	} else {
		return(
			null
		)
	}
}
export default CopyList