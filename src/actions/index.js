export function selectBook(book) {
  //selectbook is an action creator, needs to return an action, an obeject with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
