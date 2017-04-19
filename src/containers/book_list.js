import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//connect react redux is the glue between React and Redux

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whateveris returned will show up as props inside of BookList
  return{
    books: state.books
  };
}
//anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectbook is called the result should be passed to all of our reducers.  dispatch sends the action to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//second argument :selectBook is the action handler imported from index


//promote BookList from component to Container - needs to know about this new dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//connect takes a function and a Component and produces a container. Container is aware of the state contained by redux.
