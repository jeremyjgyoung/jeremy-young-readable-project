import React, { Component } from 'react';
import './App.css';
import HeaderNavBar from './components/HeaderNavBar'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList />
          </div>
      </div>
    )
  }
}

export default App;
