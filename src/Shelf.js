import React, { Component } from 'react'
import BookDisplay from './BookDisplay'

class Shelf extends Component {

  render() {
    return (
      <div>
        <p>Shelf</p>
        {this.props.bookList.map(book => (
          <p>{book}</p>
        ))}
      </div>
    )
  }
}

export default Shelf
