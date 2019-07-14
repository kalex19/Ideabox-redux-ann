import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Container = props => {
	return <div>{props.ideas.map(idea => <Card key={idea.id} {...idea} />)}</div>;
};

const mapStateToProps = state => ({
	ideas: state.ideas
});

export default connect(mapStateToProps)(Container);

//Since the component is using something from the store, mapStateToProps is used.
//Container received peices of state as props and then is able to access anything in the store via props. It is mapping over ideas and creating card components
//mapStateToProps is a parameter in connect. It also is a function that recieves state and returns an object with a key of the name of the peice of state that will be used and that key is set to a value of ideas from state/the piece of state desired from the state object.
