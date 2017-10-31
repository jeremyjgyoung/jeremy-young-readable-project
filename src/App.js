import React, { Component } from 'react';
import './App.css';
import HeaderNavBar from './components/HeaderNavBar'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostDetail from './components/PostDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <HeaderNavBar />
            <PostForm />
            <PostList />
          </div>
      </div>
    );
  }
}

export default App;
