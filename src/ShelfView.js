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
        <Shelf bookList={['a', 'b', 'c', 'd']}/>
        <Shelf bookList={['e', 'f', 'g', 'h']}/>
        <Shelf bookList={['i', 'j', 'k', 'l']}/>
      </div>
    )
  }
}

export default ShelfView
