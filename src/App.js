import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ShelfView from './ShelfView';
import SearchView from './SearchView';
import { Route } from 'react-router-dom';

class App extends Component {
  render () {
    return(
      <div>
        <Route exact path="/" render={() => (
            <ShelfView/>
          )}
        />
        <Route exact path="/search" render={({ history }) => (
            <SearchView/>
          )}
        />
      </div>
    )
  }
}

export default App;
