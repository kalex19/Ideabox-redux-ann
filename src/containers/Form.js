import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: ''
		};
	}

	submitIdea = e => {
		e.preventDefault();
		const newIdea = { id: Date.now(), ...this.state };
		this.props.addIdea(newIdea);
		this.setState({ title: '', description: '' });
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<form onSubmit={this.submitIdea}>
				<input type="text" value={this.state.title} name="title" placeholder="title" onChange={this.handleChange} />
				<input
					type="text"
					value={this.state.description}
					name="description"
					placeholder="description"
					onChange={this.handleChange}
				/>
				<input type="submit" value="Add Idea" />
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addIdea: newIdea => dispatch(addIdea(newIdea))
});

export default connect(null, mapDispatchToProps)(Form);

//Form has local state and is connected to the store
//It creates a new idea that is passed to the action creator addIdea
//The passing of the data happens in mapDispatchToProps. Here is an explaination of how it is done:
//mapDispatchToProps is a function that is passed as an arguement through the function connect
//In mapDispatchToProps, dispatch is recieved as a parameter. The entire function returns an object
//The returned object has a key value pair. The key can be called anything but is conventionally the name of the action creator - addIdea.
//The value is a function which passes newIdea as a parameter and returns dispatch.
//dispatch takes in a parameter of the action creator addIdea which is alsp a function with a parameter of the newIdea/passed in data
//This is all mapped to dispatch so the action can do it's thing and send the data to the store.
