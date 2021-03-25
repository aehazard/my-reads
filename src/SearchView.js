import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchView extends Component {
  state = {
    query: '',
    books: []
  }

  handleChange = (event) => {
    event.preventDefault()
    const query = event.target.value
    console.log(query)
    this.setState(() => ({
      query: query
    }))
    this.props.onSearch(this.state.query)
  }

  render() {
    console.log('Books is SearchView.js state')
    console.log(this.state.books)
    return (
      <div>
        <Link to="/">
          Close
        </Link>
        <p>SearchView</p>
        <input type='text' name='search' onChange={(event)=>this.handleChange(event)} placeholder='Search'>
        </input>
      </div>
    )
  }
}

export default SearchView
