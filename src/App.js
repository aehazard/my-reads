import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ShelfView from './ShelfView';
import SearchView from './SearchView';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  search = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      console.log('Books returned to App.js')
      console.log(books)
      this.setState(()=>({
        books
      }))
    })
  }

  render () {
    return(
      <div>
        <Route exact path="/" render={() => (
            <ShelfView bookList={this.state.books}/>
          )}
        />
        <Route exact path="/search" render={({ history }) => (
            <SearchView onSearch={this.search}/>
          )}
        />
      </div>
    )
  }
}

export default App;
