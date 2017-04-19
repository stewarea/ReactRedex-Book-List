import React, { Component } from 'react';
import { connect } from 'react-redux';
//connect react redux is the glue between React and Redux

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
//connect takes a function and a Component and produces a container. Container is aware of the state contained by redux. 
