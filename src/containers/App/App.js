import React from 'react';
import './App.css';
import Form from '../Form';
import Container from '../../components/Container';

function App(){
	return (
		<div className="App">
			<h1> Ideabox </h1> <Form />
			<Container />
		</div>
	);
}

export default App;

//App is a container or smart component as it needs to know about the store
//The components are created and rendered from App, already connected to store
