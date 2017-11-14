import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HeaderNavBar from './components/HeaderNavBar'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

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
        <Route exact path='/:category' render={({ match }) => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostList
              category={match.params.category}
            />
          </div>
        )}/>
        <Route path='/:category/:post_id' render={({ match }) => (
          <div>
            <HeaderNavBar
              categories={categories}
            />
            <PostForm />
            <PostDetail
              category={match.params.category}
              post_id={match.params.post_id}
            />
          </div>
        )}/>
      </div>
    )
  }
}

export default App;
