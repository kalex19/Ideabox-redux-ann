import {
  combineReducers
} from 'redux';
import {
  ideasReducer
} from './ideasReducer';

export const rootReducer = combineReducers({
  ideas: ideasReducer
})

//The root reducer combines all reducers and updates the store
//combineReducers is a function/utility imported from redux which generates a function that calls the reducers with the pieces of state selected according to their keys - the name which they are imported as - ie. ideasReducer , and combines their results into a single object
//The returned result of the combineReducers is set to the rootReducer which is passed through the createStore function which is a prop/object on the Provider in index.js
//The actions are imported in via the individual reducers