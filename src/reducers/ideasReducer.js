export const ideasReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case "ADD_IDEA":
      return [...state, payload.newIdea]
    case "DELETE_IDEA":
      return state.filter(idea => payload.id !== idea.id)
    default:
      return state
  }
}

//The store conatains all state. There can be many pieces of state.
//A reducer is created to handle one piece of state/each different domain and all of the actions/cases that have to that piece of state. It specifies how the application's state changes in response to actions sent to store. 
//This reducer deals with the ideas array
//The reducer is a function and takes two arguments - the state and it's declared default value and the action
//A switch statement is created and is used to perform cases based on different conditions - selects one of many code blocks to execute
//The switch statement takes in the type and depending on the type, runs a different case. There is also a default case incase state is undefined
//The switch statement is regular javascript
//***How many times does the function run and what makes it run multiple times, one per each action coming in via dispatch***
//The case is a key value pair, the key being the case type and the value being the returned state - the state has either been set or some form of functionality has been performed on the state
//In this switch statement the add idea case returns the spread in state along with the new idea
//In this switch statement the delete idea case returns the state after the idea with the matching id has been filered out