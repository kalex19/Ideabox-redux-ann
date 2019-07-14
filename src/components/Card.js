import React from 'react';
import { connect } from 'react-redux';
import { deleteIdea } from '../actions';

const Card = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<button onClick={() => props.deleteIdea(props.id)}>Delete</button>
		</div>
	);
};

export const mapDispatchToProps = dispatch => ({
	deleteIdea: id => dispatch(deleteIdea(id))
});

export default connect(null, mapDispatchToProps)(Card);
