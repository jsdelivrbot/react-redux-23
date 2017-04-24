import React, {Component} from 'react';
import { connect } from'react-redux'


export class BookList extends Component  {
  renderList(props) {
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className='list-group-item'>{book.title}</li>
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

export default connect(mapStateToProps) (BookList);