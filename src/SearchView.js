import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchView extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          Close
        </Link>
        <p>SearchView</p>
        <input type='text' name='search' placeholder='Search'>
        </input>
      </div>
    )
  }
}

export default SearchView
