import React, { Component }from 'react';
import { Segment, Button } from 'semantic-ui-react'

class WorldContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			fiveWorldBooks: [],
			openLibPref: 'http://openlibrary.org/api/books?bibkeys=',
			openLibSuff: '&jscmd=data&format=json'
		}
	}
	componentDidMount(){
		this.getWorldBooks();
	}
	getWorldBooks = async () => {
		
		
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
				<Button color="blue" onClick={() => this.getWorldBooks()}>Search The World!</Button>
			</Segment>
		)

	}
}



export default WorldContainer
