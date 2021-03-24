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
      </div>
    )
  }
}

export default SearchView
