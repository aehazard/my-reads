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

  render () {
    console.log(this.state.books);
    return(
      <div>
        <Route exact path="/" render={() => (
            <ShelfView bookList={this.state.books}/>
          )}
        />
        <Route exact path="/search" render={({ history }) => (
            <SearchView bookList={this.state.books}/>
          )}
        />
      </div>
    )
  }
}

export default App;
