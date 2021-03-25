import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ShelfView extends Component {
  render() {
    return (
      <div>
        <Link to="/search">
          Search
        </Link>
        <p>ShelfView</p>
        <Shelf shelfName={'currentlyReading'} bookList={this.props.bookList}/>
        <Shelf shelfName={'wantToRead'} bookList={this.props.bookList}/>
        <Shelf shelfName={'read'} bookList={this.props.bookList}/>
      </div>
    )
  }
}

export default ShelfView
