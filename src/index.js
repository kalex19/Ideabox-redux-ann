import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import composeWithDevTools from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

//There are several imports necessary to set up redux
//The Provider comes from react-redux and encapsulates the home/app component which all other components are derrived from - the component tree. It connects react and redux and makes the store available to any nested components that are wrapped in the connect function.
//Provider has a property of store defining the store which is a variable delcared above. The value of the store variable is the createStore function which is being passed the rootReducer.
//The rootReducer is being passed to through createStore as the rootReducer reducers all reducers and then updates the store. ***Need a better understanding of this***
//creatStore is imported from redux.
//The rootReducer is also imported to be used as an arguement in createStore.
