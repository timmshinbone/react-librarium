import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react'
import CopyList from '../CopyList'
// import CreateBook from '../CreateBookForm'
import CreateBookModal from '../CreateBookModal'
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
			this.setState({
				copies: parsedCopies.data
			})
		}
		catch (err) {
			console.log(err);
		}
	}
	addBook = async (e, bookFromModalForm) => {
		e.preventDefault();
		try{
			const createdBookResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/books/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(bookFromModalForm),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const parsedResponse = await createdBookResponse.json();
			console.log("This is parsedResponse");
			console.log(parsedResponse);
			console.log('This is book from modal form')
			console.log(bookFromModalForm);
			this.getCopies()
			this.closeAddModal()
		}
		catch (err) {
			console.log('error');
			console.log(err);
			this.closeAddModal()

		}
	}
	openAddModal = () => {
		this.setState({
			addModalOpen: true
		})
	}
	closeAddModal = () => {
		this.setState({
			addModalOpen: false
		})
	}
	render(){
		return(
			<div>
				<Segment>
					<Button color="blue" onClick={this.openAddModal}>Add a New Book!</Button>
				</Segment>
				<CopyList copies={this.state.copies} />
				<CreateBookModal
					open={this.state.addModalOpen}
					addBook={this.addBook}
					closeModal={this.closeAddModal}
				/>
			</div>
		)
	}
}


export default CopyContainer


//.where(this.state.copies['owner'].username === this.props.loggedInUsername)








