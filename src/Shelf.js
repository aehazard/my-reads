import React, { Component } from 'react'
import BookDisplay from './BookDisplay'

class Shelf extends Component {

  filteredBooks = () => {
    let theseBooks = this.props.bookList.filter(book => (
      book.shelf === this.props.shelfName
    ))
    return theseBooks
  }

  render() {
    const books = this.filteredBooks()
    const prettyTitles = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read"
    }
    return (
      <div>
        <p>{prettyTitles[this.props.shelfName]}</p>
        {books.map(book => (
          <BookDisplay book={book}/>
        ))}
      </div>
    )
  }
}

export default Shelf
