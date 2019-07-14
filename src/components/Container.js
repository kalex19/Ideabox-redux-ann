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
