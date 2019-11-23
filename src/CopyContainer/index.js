import React, { Component } from 'react';
import CopyList from '../CopyList'
import CreateBook from '../CreateBookForm'
//import edit book modal

class CopyContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			copies: [],
			editModalOpen: false,
			addModalOpen: false,
			copyToEdit: {
				title: '',
				author: '',
				isbn: '',
				genre: '',
				pages: 0,
				image: '',
				published: '',
				id: ''
			}
		}
	}
	componentDidMount(){
		this.getCopies();
	}
	getCopies = async () => {
		try {
			const copies = await fetch(process.env.REACT_APP_API_URL + '/api/v1/copies/', {
				credentials: 'include'
			});
			const parsedCopies = await copies.json();
			console.log(parsedCopies);
			this.setState({
				copies: parsedCopies.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	addBook = async (e, bookFromTheForm) => {
		e.preventDefault();
		try{
			const createdBookResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/books/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(bookFromTheForm),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedResponse = await createdBookResponse.json();
			this.setState({copies: [...this.state.copies, parsedResponse.data]})
		}
		catch (err) {
			console.log('error');
			console.log(err);
		}
	}

	render(){
		console.log("\nThis is this.state.copies Copycontainer");
		console.log(this.state.copies);
		return(
			<div>
				<CopyList copies={this.state.copies} />
				<CreateBook addBook={this.addBook}/>
			</div>
		)
	}
}


export default CopyContainer


//.where(this.state.copies['owner'].username === this.props.loggedInUsername)








