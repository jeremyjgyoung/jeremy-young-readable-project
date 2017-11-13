import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
        <Route exact path='/' render={() => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList />
          </div>
        )}/>
        <Route path='/redux' render={() => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList
              category='redux'
            />
          </div>
        )}/>
        <Route path='/react' render={() => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList
              category='react'
            />
          </div>
        )}/>
        <Route path='/udacity' render={() => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList
              category='udacity'
            />
          </div>
        )}/>
      </div>
    )
  }
}

export default App;
