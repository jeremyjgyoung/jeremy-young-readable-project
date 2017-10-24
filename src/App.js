import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HeaderNavBar from './components/HeaderNavBar'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <HeaderNavBar />
            <PostList />
          </div>
        )}/>
        <Route path='/post-detail' render={() => (
          <div>
            <HeaderNavBar />
            <PostDetail />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
