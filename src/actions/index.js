export function selectBook (book) {
  // selectBook is action creator and so it needs to return an action... 
  // an object with a type property
//  console.warn(book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}