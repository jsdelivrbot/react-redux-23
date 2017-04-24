import React, {Component} from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //flows fuctions through all reducers in app


export class BookList extends Component  {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li 
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        className='list-group-item'>
        {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
/**
 * whatever is returned will show up in books list as props
 */
 return {
  books: state.books
 };
}

/**
 * 
 * mapDispatchToProps -- anthing returned from this function will be end up
 * as props on the book list container
 * we can call 'this.props.selectBook'
 */

function mapDispatchToProps(dispatch) {
  /**
   * when select book is called by user result should be passed
   * to all of the reducers -- this is what bindActionCreators is doing
   */
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (BookList);