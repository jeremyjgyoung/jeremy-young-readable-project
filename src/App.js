import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HeaderNavBar from './components/HeaderNavBar'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import * as ReadableAPI from './utils/ReadableAPI'
import { connect } from 'react-redux'
import { addPost } from './actions'

class App extends Component {
  state = {
    categories: []
  }

// How does it get back into the store?
  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({ categories })
    })
    ReadableAPI.getPosts().then(posts => {
      console.log(posts)
      posts.map(post => this.props.addPost({post:post}))
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <HeaderNavBar
              categories={this.state.categories}
            />
            <PostForm />
            <PostList />
          </div>
        )}/>
        <Route exact path='/:category' render={({ match }) => (
          <div>
            <HeaderNavBar
              categories={this.state.categories}
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
              categories={this.state.categories}
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

function mapDispatchToProps(dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data))
  }
}

export default connect(null, mapDispatchToProps)(App)
