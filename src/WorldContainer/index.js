import React, { Component }from 'react';
import { Segment, Button, Form } from 'semantic-ui-react'

class WorldContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			fiveWorldBooks: [],
			openLibPref: 'http://openlibrary.org/api/books?bibkeys=',
			openLibSuff: '&jscmd=data&format=json'
		}
	}
	// componentDidMount(){
	// 	this.getWorldBooks();
	// }
	handleChange(e){
		e.preventDefault();
		
	}
	getWorldBooks = async (e, inputFromForm) => {
		console.log('this is input from the form\n', inputFromForm);	
		
		try {
			const wBooks = await fetch(this.state.openLibPref + 'ISBN:9780345538987' + this.state.openLibSuff)
			const parsedWBooks = await wBooks.json();
			console.log('this is parsedWBooks\n\n', parsedWBooks);
		}
		catch (err) {
			console.log(err)
		}
	}
	render(){
		return(
			<Segment>
				<Form onSubmit={(e) => this.getWorldBooks(e)}>
					<Form.Input type="text" name="isbn" onChange={this.handleChange}/>
					<Button color="blue" type="Submit">Search The World!</Button>
				</Form>
			</Segment>
		)

	}
}



export default WorldContainer
