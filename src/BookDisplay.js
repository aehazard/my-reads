import React, { Component } from 'react'

class BookDisplay extends Component {
  render() {
    return (
      <p>{this.props.book.title}</p>
    )
  }
}

export default BookDisplay
