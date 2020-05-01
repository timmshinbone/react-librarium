import React, { Component }from 'react';
import { Segment, Button } from 'semantic-ui-react'

class WorldContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			fiveWorldBooks: [],
			openLibPref: 'http://openlibrary.org/api/books?bibkeys=ISBN:',
			openLibSuff: '&jscmd=data&format=json'
		}
	}
	componentDidMount(){
		this.getWorldBooks();
	}
	getWorldBooks = async () => {
		
		
		try {
			const wBooks = await fetch(this.state.openLibPref + '9780345538987' + this.state.openLibSuff)
			const parsedWBooks = await wBooks.json();
			console.log('this is wBooks\n\n', parsedWBooks);
		}
		catch (err) {
			console.log(err)
		}
	}
	render(){
		return(
			<p>WorldContainer</p>
		)

	}
}



export default WorldContainer
