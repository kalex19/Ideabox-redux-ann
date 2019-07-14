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

/*

const e = {
  preventDefault: () => {},
  target: {
    myFunc: name => `Hello, ${name}`,
    name: 'name',
    value: 'value'
  }
}

  addIdea: function(newIdea) {
    return dispatch(addIdea(newIdea))
  }

*/
