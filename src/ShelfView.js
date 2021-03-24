import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShelfView extends Component {
  render() {
    return (
      <div>
        <Link to="/search">
          Search
        </Link>
        <p>ShelfView</p>
      </div>
    )
  }
}

export default ShelfView
