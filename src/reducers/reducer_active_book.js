//state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
//if action type is book_selected then return the payload. if not, return state
//setting state to null because we can't return undefined initially
