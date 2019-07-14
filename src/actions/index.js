export const addIdea = (newIdea) => {
  return {
    type: 'ADD_IDEA',
    payload: {
      newIdea
    }
  }
}

export const deleteIdea = (id) => {
  return {
    type: 'DELETE_IDEA',
    payload: {
      id
    }
  }
}

//The actions file holds all the actions which are objects containing information/data. They are the only source of data for the store.
//The actions are created by the action creator, a function
//export const function name is the action creator function
//A parameter is passed into the function to be used within the action payload
//The payload can be any piece of data
//Out of the function an object/the action is returned
//The action contains a descriptor which is the type of action
//The type is used as an identifier for that action in he switch case once the action reaches the reducer
//The payload can be set to an object containing the data or it can be written exactly as the implied name of the data.