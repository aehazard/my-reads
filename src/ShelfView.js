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
        <Shelf/>
        <Shelf/>
        <Shelf/>
      </div>
    )
  }
}

export default ShelfView
