import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});
//these keys are pieces of application state
export default rootReducer;
