import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateBook extends Component {
	constructor(){
		super();

		this.state = {
			title: '',
			author: '',
			isbn: '',
			genre: '',
			pages: 0,
			image: '',
			published: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
		return(
			<Segment>
				<Label>Add a Book to your Librarium!</Label>
				<Form onSubmit={(e) => this.props.addBook(e, this.state)}>
					<Label>Title:</Label>
					<Form.Input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
					<Label>Author:</Label>
					<Form.Input type='text' name='author' value={this.state.author} onChange={this.handleChange}/>
					<Label>ISBN:</Label>
					<Form.Input type='text' name='isbn' value={this.state.isbn} onChange={this.handleChange}/>
					<Label>Genre:</Label>
					<Form.Input type='text' name='genre' value={this.state.genre} onChange={this.handleChange}/>
					<Label>Page Count:</Label>
					<Form.Input type='number' name='pages' value={this.state.pages} onChange={this.handleChange}/>
					<Label>Image Source:</Label>
					<Form.Input type='text' name='image' value={this.state.image} onChange={this.handleChange}/>
					<Label>Year Published:</Label>
					<Form.Input type='text' name='published' value={this.state.published} onChange={this.handleChange}/>
					<Button type='Submit' color='teal'>Add Book!</Button>
				</Form>
			</Segment>
		)
	}
}




export default CreateBook;